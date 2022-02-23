import React, { Component, createRef } from "react";
import DanceParty from "../../DancePartyUtils/P5Utils/p5.dance";
import ResourceLoader from "../../DancePartyUtils/P5Utils/ResourceLoader";
import hammer from "../../DancePartyUtils/P5Utils/metadata/hammer.json";
import injectInterpreted from "../../DancePartyUtils/P5Utils/injectInterpreted";
import constants from "../../DancePartyUtils/P5Utils/constants";

// eslint-disable-next-line import/no-webpack-loader-syntax
import interpreted from "!!raw-loader!../../DancePartyUtils/P5Utils/p5.dance.interpreted.js";

import "./dance.css";

// Style
import { Spinner, Button, Form, Row, Col, Modal } from "react-bootstrap";

// Use react-blockly for blocks of code
import DancePartyBlockly from "../../components/DancePartyBlockly";

// songs

export default class Dance extends Component {
  constructor(props) {
    super(props);
    this.myDanceBoxRef = createRef();
    // this.initSongsPromise = this.initSongs(config);
    this.state = {
      show: false,
      nativeAPI: { isLoading: true },
      songName: "Choose your favourite Song",
      showCode: `var cat = makeNewDanceSprite("DOG", null, {x: 200, y: 200});
            setBackgroundEffectWithPalette("circles", "rand");
            
            atTimestamp(2, "measures", function () {
              changeMoveLR(cat, MOVES.Dab, 1);
            });
            `,
    };
  }

  componentDidMount() {
    console.log("nativeAPI", this.state.nativeAPI);
    // console.log(interpreted);
    const nativeAPI = (window.nativeAPI = new DanceParty({
      // onPuzzleComplete: this.onPuzzleComplete.bind(this),
      onPuzzleComplete: () => {},
      playSound: this.playSound,
      // recordReplayLog,
      showMeasureLabel: !this.share,
      // onHandleEvents: this.onHandleEvents,
      onInit: this.onInit,
      // spriteConfig: new Function("World", this.level.customHelperLibrary),
      container: this.myDanceBoxRef.current,
      // i18n: danceMsg,
      resourceLoader: new ResourceLoader(
        "https://curriculum.code.org/images/sprites/dance_20191106/"
      ),
    }));
    this.setState({ nativeAPI });
    console.log("after load", this.state.nativeAPI.isLoading);
  }

  // playSound = (url, callback, onEnded) => {
  //   audioCommands.playSound({
  //     url: url,
  //     callback: callback,
  //     onEnded: () => {
  //       onEnded();
  //       this.studioApp_.toggleRunReset("run");
  //     },
  //   });
  // };

  playSound = (url, callback, onEnded) =>
    setTimeout(() => {
      callback && callback();
    }, 0);

  onInit = async (nativeAPI) => {
    if (this.share) {
      // In the share scenario, we call ensureSpritesAreLoaded() early since the
      // student code can't change. This way, we can start fetching assets while
      // waiting for the user to press the Run button.
      await this.studioAppInitPromise;
      const charactersReferenced = this.computeCharactersReferenced(
        this.studioApp_.getCode()
      );
      await nativeAPI.ensureSpritesAreLoaded(charactersReferenced);
    }
    // this.danceReadyPromiseResolve();
    // Log this so we can learn about how long it is taking for DanceParty to
    // load of all of its assets in the wild (will use the timeSinceLoad attribute)
    // const logSampleRate = 1;
    // logToCloud.addPageAction(
    //     logToCloud.PageAction.DancePartyOnInit,
    //     {
    //         logSampleRate,
    //         share: this.share,
    //     },
    //     logSampleRate
    // );
  };

  // initSongs = async (config) => {
  //   // Check for a user-specified manifest file.
  //   const manifest = queryString.parse(window.location.search).manifest;
  //   const songManifest = await getSongManifest(
  //     config.useRestrictedSongs,
  //     manifest
  //   );
  //   const songData = parseSongOptions(songManifest);
  //   const selectedSong = getSelectedSong(songManifest, config);

  //   // Set selectedSong first, so we don't initially show the wrong song.
  //   getStore().dispatch(setSelectedSong(selectedSong));
  //   getStore().dispatch(setSongData(songData));

  //   loadSong(selectedSong, songData, (status) => {
  //     if (status === 403) {
  //       // Something is wrong, because we just fetched cloudfront credentials.
  //       firehoseClient.putRecord(
  //         {
  //           study: "restricted-song-auth",
  //           event: "initial-auth-error",
  //           data_json: JSON.stringify({
  //             currentUrl: window.location.href,
  //             channelId: config.channel,
  //           }),
  //         },
  //         {
  //           includeUserId: true,
  //         }
  //       );
  //     }
  //   });
  //   this.updateSongMetadata(selectedSong);

  //   if (config.channel) {
  //     // Ensure that the selected song will be stored in the project the first
  //     // time we run the level. This ensures that if we are on a project-backed
  //     // script level, then the correct song will still be selected after we
  //     // share.
  //     config.level.selectedSong = selectedSong;
  //   }
  // };

  onHandleEvents = (currentFrameEvents) => {
    this.hooks.find((v) => v.name === "runUserEvents").func(currentFrameEvents);
    this.captureThumbnailImage();
  };

  onHandleClickButton = async () => {
    this.state.nativeAPI.reset();
    await this.state.nativeAPI.ensureSpritesAreLoaded();

    const { runUserSetup, runUserEvents, getCueList } = injectInterpreted(
      this.state.nativeAPI,
      interpreted,
      this.state.showCode
    );

    this.state.nativeAPI.addCues(getCueList());
    this.state.nativeAPI.onHandleEvents = (currentFrameEvents) =>
      runUserEvents(currentFrameEvents);

    runUserSetup();

    await this.initSongsPromise;

    await this.state.nativeAPI.playSong(this.state.songName);

    this.state.nativeAPI.play(hammer);
  };

  onReset = () => {
    this.state.nativeAPI.reset();
    this.state.nativeAPI.stopSong(this.state.songName);
  };

  handleChange = (event) => {
    let showCode = this.state.showCode;
    showCode = event.Code.value;
    this.setState({ showCode });
  };

  handleSongChange = (event) => {
    this.setState({ songName: event.target.value });
  };

  setCode = (code) => {
    this.setState({ showCode: code });
  };

  loadingBar = (
    <div id="p5_loading" className="loadingclass">
      <Spinner className="align-middle" animation="grow" variant="warning" />
    </div>
  );

  render() {
    // console.log("id", document.getElementById("p5_loading"));
    // console.log("className", document.getElementsByClassName("loadingclass"));
    // console.log("loadingbar", this.loadingBar);
    // console.log('nativeApi', this.state.nativeAPI.p5_);
    return (
      <>
        <Col xl={12} className="d-xl-flex m-0 p-0">
          <Col
            xl={4}
            className="m-0 justify-content-center mx-auto dance-canva"
          >
            <Form className="songOptionStyle py-5 mx-auto">
              <Form.Control
                as="select"
                size="md"
                custom
                value={this.state.songName}
                onChange={(event) => this.handleSongChange(event)}
              >
                <option>Choose your favourite Song</option>
                {constants.SONG_NAMES.map((data) => (
                  <option key={data}>{data}</option>
                ))}
              </Form.Control>
            </Form>
            <div
              className="d-block mx-auto"
              style={{ width: "90%" }}
              ref={this.myDanceBoxRef}
            ></div>
            <div className="py-5 d-flex justify-content-center">
              <Button
                className="mx-2 bg-warning text-dark"
                onClick={this.onHandleClickButton}
                // disabled={this.loadingBar}
              >
                Click to see dance moves
              </Button>
              <Spinner
                id="p5_loading"
                className="loadingclass align-middle"
                animation="grow"
                variant="warning"
              />
            </div>
          </Col>
          <Col xl={8} className="m-0 p-0" style={{ backgroundColor: "red" }}>
            <Row className="blocklyNavStyle px-4">
              <Col xl={8} md={12} className="d-flex justify-content-start">
                <div className="d-none d-sm-block mr-5">Blocks</div>
                <div className="d-none d-sm-block ml-5">Workspace</div>
              </Col>
              <Col xl={4} md={12} className="d-flex justify-content-end">
                <Button
                  className="mx-1 bg-warning text-dark"
                  onClick={this.onReset}
                >
                  Reset
                </Button>
                <Button
                  className="mx-1 bg-warning text-dark"
                  onClick={() => this.setState({ show: true })}
                >
                  Show Code
                </Button>
                <Modal
                  show={this.state.show}
                  onHide={() => this.setState({ show: false })}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Code</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="my-3">
                      <Form.Group controlId="showCode">
                        <Form.Control
                          type="text"
                          as="textarea"
                          rows={7}
                          value={this.state.showCode}
                          placeholder="Code for Dance Move"
                          onChange={(event) => this.handleChange(event)}
                          disabled={true}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.setState({ show: false })}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
            <DancePartyBlockly setCode={this.setCode} />
          </Col>
        </Col>
      </>
    );
  }
}

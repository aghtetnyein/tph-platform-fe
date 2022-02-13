import React, { Component, createRef } from "react";
// import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactFullscreen from "react-easyfullscreen";
import Blockly from "blockly";
import axios from "axios";

import DanceParty from "../DancePartyUtils/p5.dance";
import ResourceLoader from "../DancePartyUtils/ResourceLoader";
import hammer from "../DancePartyUtils/metadata/hammer.json";
import injectInterpreted from "../DancePartyUtils/injectInterpreted";
import constants from "../DancePartyUtils/constants";

// eslint-disable-next-line import/no-webpack-loader-syntax
import interpreted from "!!raw-loader!../DancePartyUtils/p5.dance.interpreted.js";

import "../assets/Css/blockly-workspace.css";
import styles from "../assets/Css/DancePartyWorkspace.module.css";
import { COLORS } from "../assets/colors.js";

// Style
import { Spinner, Form, Col, Modal } from "react-bootstrap";

// Use react-blockly for blocks of code
import TPHDanceBlockly from "./workspace/TPHDanceBlockly";
import Button from "./form/WorkspaceButton";
// import ActivityCircle from "../components/Workspace/ActivityCircle";
// import Instructions from "../Components/Workspace/Instructions";
// import ConfirmationModal from "../Components/ConfirmationModal";

//Hint
// import Hint from "../Components/Workspace/Hint";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faShare,
  faPlay,
  faStop,
  faUndoAlt,
  faVolumeDown,
  faVolumeUp,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

export default class DancePartyWorkspace extends Component {
  constructor(props) {
    super(props);
    this.myDanceBoxRef = createRef();

    // this.initSongsPromise = this.initSongs(config);
    this.state = {
      show: false,
      canvaMode: "canva",
      showInstructions: true,
      showHint: false,
      volumeValue: 30,
      nativeAPI: { isLoading: true },
      currentActivity: window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      ),
      songName: "Choose your favourite Song",
      dancePartyCode: `var cat = makeNewDanceSprite("DOG", null, {x: 200, y: 200});
            setBackgroundEffectWithPalette("circles", "rand");
            
            atTimestamp(2, "measures", function () {
              changeMoveLR(cat, MOVES.Dab, 1);
            });
            `,
      dancePartySaveCode: "",
      isLoading: true,
      initialXml: "",
      toolbox: [{}],
      activeActivity: "",
      isConfirm: false,
      runLoading: false,
    };
  }

  componentDidMount() {
    // console.log("nativeAPI", this.state.nativeAPI);
    // console.log(interpreted);
    this.dataFetch();
    const nativeAPI = (window.nativeAPI = new DanceParty({
      // onPuzzleComplete: this.onPuzzleComplete.bind(this),
      onPuzzleComplete: () => {},
      playSound: this.playSound,

      // song: loadSound(nativeAPI.songName.ushweyoe.file),
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
    // console.log("after load", this.state.nativeAPI.isLoading);
    // console.log(nativeAPI);
    // console.log("hello from parent" + this.props.currentLevel.id);
  }

  componentWillUnmount() {
    this.onStop();
  }

  dataFetch = async () => {
    // await fetch(process.env.REACT_APP_API_URL + "activities/")
    await axios({
      url: `${process.env.REACT_APP_API_URL}activities`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentActivity = json.filter((item) => {
          return item.level_id === 16;
        });
        this.setState({ initialXml: currentActivity[0].source_code });
        this.setState({
          toolbox: JSON.parse(
            currentActivity[0].tools_box.replace(/\r?\n|\r\s/g, "")
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    await fetch(process.env.REACT_APP_API_URL + "`progresses/`")
    await axios({
      url: `${process.env.REACT_APP_API_URL}progresses`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.access_token}`,
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentProgress = json.filter((item) => {
          return item.level_id === this.props.currentLevel.id;
        });

        if (currentProgress[0].source_code != null) {
          this.setState({ initialXml: currentProgress[0].source_code });
        }

        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("null source code");
        this.setState({ isLoading: false });
      });
  };

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

  resetButton = async () => {
    if(window.confirm("Are you sure!"))
    {
    
      this.setState({
      show: false,
      canvaMode: "canva",
      showInstructions: true,
      showHint: false,
      volumeValue: 30,
      currentActivity: window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      ),
      songName: "Choose your favourite Song",
      dancePartyCode: `var cat = makeNewDanceSprite("DOG", null, {x: 200, y: 200});
            setBackgroundEffectWithPalette("circles", "rand");
            
            atTimestamp(2, "measures", function () {
              changeMoveLR(cat, MOVES.Dab, 1);
            });
            `,
      dancePartySaveCode: '',
      isLoading: true,
      initialXml: "",
      toolbox: [{}],
      activeActivity: "",
      isConfirm: false,
      runLoading: false,
    });
 
    await axios({
      url: `${process.env.REACT_APP_API_URL}activities`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentActivity = json.filter((item) => {
          return item.level_id === this.props.currentLevel.id;
        });
        this.setState({ initialXml: '<xml><block type="Setup" id="OrfQ2bubjtV}]s.XbaYw" x="30" y="30"><field name="Name">Setup</field></block></xml>' });
        this.setState({
          toolbox: JSON.parse(
            currentActivity[0].tools_box.replace(/\r?\n|\r\s/g, "")
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
       await axios({
      url: `${process.env.REACT_APP_API_URL}progresses`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.access_token}`,
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentProgress = json.filter((item) => {
          return item.level_id === this.props.currentLevel.id;
        });

        if (currentProgress[0].source_code != null) {
          this.setState({ initialXml: '<xml><block type="Setup" id="OrfQ2bubjtV}]s.XbaYw" x="30" y="30"><field name="Name">Setup</field></block></xml>' });
        }

        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("null source code");
        this.setState({ isLoading: false });
      });
    }

  };



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

  onRun = async () => {
    this.setState({ runLoading: true });
    this.state.nativeAPI.reset();
    await this.state.nativeAPI.ensureSpritesAreLoaded();

    const { runUserSetup, runUserEvents, getCueList } = injectInterpreted(
      this.state.nativeAPI,
      interpreted,
      this.state.dancePartyCode
    );

    this.state.nativeAPI.addCues(getCueList());
    this.state.nativeAPI.onHandleEvents = (currentFrameEvents) =>
      runUserEvents(currentFrameEvents);

    runUserSetup();

    await this.initSongsPromise;

    await this.state.nativeAPI.playSong(this.state.songName);

    this.state.nativeAPI.play(hammer);
    console.log(this.state.nativeAPI.songName);

    // this.setState({ currentActivity: window.location.pathname.substring(
    //     window.location.pathname.lastIndexOf("/") + 1
    //   ) });

    // this.saveProgress(this.state.currentActivity);
    this.setState({ runLoading: false });
    console.log("onRun" + this.state.currentActivity)
  };

  onStop = () => {
    this.state.nativeAPI.reset();
    this.state.nativeAPI.stopSong(this.state.songName);

    console.log(this.state.elem);
  };

  handleChange = (event) => {
    let dancePartyCode = this.state.dancePartyCode;
    dancePartyCode = event.Code.value;
    this.setState({ dancePartyCode });
  };

  handleSongChange = (event) => {
    this.setState({ songName: event.target.value });
  };

  handleVolume = (event) => {
    this.setState({ volumeValue: event.target.value });
  };

  setCode = (code) => {
    this.setState({ dancePartyCode: code });
  };

  saveCode = (code) => {
    this.setState({ dancePartySaveCode: code });
  };

  // handleActive = (activeActivity) => {
  //   this.setState({ activeActivity });
  //   this.setState({ isConfirm: true });
  // };

  changeActivity = async (activeActivity) => {
    this.setState({ isConfirm: false });
    this.setState({ isLoading: true });
    // this.setState({ currentActivity: activeActivity });
    this.props.history.push("/dance-party/workspace/" + activeActivity);


    this.onStop();
    // console.log("changeActivity" +  activeActivity)

    // await fetch(process.env.REACT_APP_API_URL + "activities/")
    await axios({
      url: `${process.env.REACT_APP_API_URL}activities`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentActivity = json.filter((item) => {
          return item.level_id === activeActivity;
        });
        this.setState({ initialXml: currentActivity[0].source_code });
        this.setState({
          toolbox: JSON.parse(
            currentActivity[0].tools_box.replace(/\r?\n|\r\s/g, "")
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // await fetch(process.env.REACT_APP_API_URL + "progresses/")
    await axios({
      url: `${process.env.REACT_APP_API_URL}progresses`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.access_token}`,
      },
    })
      .then((response) => response.data)
      .then((json) => {
        let currentProgress = json.filter((item) => {
          return item.level_id === activeActivity;
        });
        if (currentProgress[0].source_code != null) {
          this.setState({ initialXml: currentProgress[0].source_code });
        }

        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("null source code");
        this.setState({ isLoading: false });
      });
  };

  saveProgress = async (activeLevelId) => {
    console.log("saveProgress" + activeLevelId);
    let currentProgressId = await axios({
      url: `${process.env.REACT_APP_API_URL}progresses`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.access_token}`,
      },
    })
      .then((response) => response.data)
      .then((json) => {
        console.log("hello", json);
        let currentProgress = json.filter((item) => {
          return Number(item.level_id) === Number(activeLevelId);
        });
        if (currentProgress[0] != null) {
          return currentProgress[0].id;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    let currentActivityId = await fetch(
      process.env.REACT_APP_API_URL + "activities"
    )
      .then((response) => response.json())
      .then((json) => {
        let currentProgress = json.filter((item) => {
          return Number(item.level_id) === Number(activeLevelId);
        });
        if (currentProgress[0] != null) {
          return currentProgress[0].id;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(currentProgressId);
    console.log(currentActivityId);

    if (currentProgressId != null) {
      axios({
        url: process.env.REACT_APP_API_URL + "progresses/" + currentProgressId,
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
          Authorization: `Bearer ${this.props.access_token}`,
        },
        data: {
          enrollment_id: 1,
          level_id: activeLevelId,
          activity_id: currentActivityId,
          level_status: "In progress",
          md5: "null",
          source_code: this.state.dancePartySaveCode.outerHTML,
          lines_of_code: 3,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      axios({
        url: process.env.REACT_APP_API_URL + "progresses",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
          Authorization: `Bearer ${this.props.access_token}`,
        },
        data: {
          enrollment_id: 1,
          level_id: activeLevelId,
          activity_id: currentActivityId,
          level_status: "Not started",
          md5: "null",
          source_code: this.state.dancePartySaveCode.outerHTML,
          lines_of_code: 3,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  activityLength = async () => {
    const responseData = await axios({
      url: `${process.env.REACT_APP_API_URL}activities`,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        const result = data.map((item) => {
          return item;
        });
        return result;
      });
    // this.setState({ activities: responseData });
  };

  loadingBar = (
    <div id="p5_loading" className="loadingclass">
      <Spinner className="align-middle" animation="grow" variant="warning" />
    </div>
  );

  // hint
  showHideHint = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };

  render() {
    // console.log("id", document.getElementById("p5_loading"));
    // console.log("className", document.getElementsByClassName("loadingclass"));
    // console.log("loadingbar", this.loadingBar);
    // console.log('nativeApi', this.state.nativeAPI.p5_);

    return (
      <div className={styles.parent}>
        <Col xl={12} className="d-xl-flex m-0 p-0">
          <Col xl={4} className={styles.parent__danceCanva}>
            {/* <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <div className={styles.parent__danceCanva__inputFields}>
                <input
                  type="text"
                  placeholder="Project name"
                  className={styles.parent__danceCanva__inputFields__textInput}
                ></input>
              </div>
              <div
                onClick={() => {
                  this.saveProgress(this.props.currentLevel.id);
                }}
              >
                <Button label="Save" styleType="button-outline" icon={faSave} />
                <button onClick={this.activityLength}>Hello</button>
              </div>
            </div> */}
            <div
              className="mt-4 d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <div className={styles.parent__danceCanva__inputFields}>
                <select
                  type="select"
                  value={this.state.songName}
                  onChange={(event) => this.handleSongChange(event)}
                  className={styles.parent__danceCanva__inputFields__textInput}
                >
                  <option>Choose your favourite Song</option>
                  {constants.SONG_NAMES.map((data) => (
                    <option key={data}>{data}</option>
                  ))}
                </select>
              </div>
              {/* <Button label="Share" styleType="button-outline" icon={faShare} /> */}
            </div>
            <div className={styles.parent__danceCanva__tabsParent}>
              <div
                className={`${styles.parent__danceCanva__tabsParent__tab} ${
                  this.state.canvaMode === "canva" ? styles.active : ""
                }`}
                onClick={() => this.setState({ canvaMode: "canva" })}
              >
                Canvas
              </div>
              <div
                className={`${styles.parent__danceCanva__tabsParent__tab} ${
                  this.state.canvaMode === "code" ? styles.active : ""
                }`}
                onClick={() => this.setState({ canvaMode: "code" })}
              >
                Code
              </div>
              {/* <div
                className={`${styles.parent__danceCanva__tabsParent__tab} ${
                  this.state.canvaMode === "saved-code" ? styles.active : ""
                }`}
                onClick={() => this.setState({ canvaMode: "saved-code" })}
              >
                Saved Code
              </div> */}
            </div>
            <div
              className={`${styles.parent__danceCanva__canvasParent} ${
                this.state.canvaMode === "code" ? "" : "d-none"
              }`}
            >
              <div className={styles.parent__danceCanva__canvasParent__code}>
                <textarea
                  type="textarea"
                  value={this.state.dancePartyCode}
                  placeholder="Code for Dance Move"
                  onChange={(event) => this.handleChange(event)}
                  disabled={true}
                ></textarea>
              </div>
            </div>
            <div
              className={`${styles.parent__danceCanva__canvasParent} ${
                this.state.canvaMode === "saved-code" ? "" : "d-none"
              }`}
            >
              <div className={styles.parent__danceCanva__canvasParent__code}>
                {this.state.dancePartySaveCode.outerHTML}
              </div>
            </div>
            <ReactFullscreen>
              {({ ref, isEnabled, onRequest, onExit }) => (
                <div>
                  <div
                    ref={ref}
                    className={`${styles.parent__danceCanva__canvasParent} ${
                      this.state.canvaMode === "canva" ? "" : "d-none"
                    } ${styles.fullScreen}`}
                  >
                    <div ref={this.myDanceBoxRef}></div>
                    { this.state.runLoading && 
                        <Spinner animation="border" role="status" className={`${styles.parent__danceCanva__runloading}`}>
                        </Spinner>
                    }
                  </div>
                  <div
                    className={`${styles.parent__danceCanva__actionButtons} ${
                      this.state.canvaMode === "canva" ? "" : "d-none"
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <Button
                          label="Run"
                          styleType="button-fill"
                          icon={faPlay}
                          iconColor={COLORS.green}
                          onClickFun={this.onRun}
                        />
                      </div>
                      
                      <div className="mr-2">
                        <Button
                          label="Stop"
                          styleType="button-fill"
                          icon={faStop}
                          iconColor={COLORS.red}
                          onClickFun={this.onStop}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Spinner
                        id="p5_loading"
                        className="loadingclass align-middle"
                        animation="grow"
                        variant="warning"
                      />
                      {/* <div className="d-flex align-items-center justify-content-around mr-3">
                        <i className="d-flex align-items-center">
                          <FontAwesomeIcon
                            className={
                              styles.parent__danceCanva__actionButtons__iconSelf
                            }
                            icon={faVolumeDown}
                          />
                        </i>
                        <div
                          className="d-flex align-items-center"
                          style={{ width: "7em" }}
                        >
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value={this.state.volumeValue}
                            className={
                              styles.parent__danceCanva__actionButtons__slider
                            }
                            onChange={this.handleVolume}
                          ></input>
                        </div>
                      </div> */}
                      <div onClick={() => onRequest()}>
                        <i className="d-flex align-items-center">
                          <FontAwesomeIcon
                            className={
                              styles.parent__danceCanva__actionButtons__iconSelf
                            }
                            icon={faExpand}
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ReactFullscreen>
          </Col>
          <Col xl={8} className="m-0 p-0">
            
            {this.state.isLoading ? null : (
              <div id="blocklyArea">
                <TPHDanceBlockly
                  setCode={this.setCode}
                  saveCode={this.saveCode}
                  xml={this.state.initialXml}
                  toolboxCategories={this.state.toolbox}
                />
              </div>
            )}
          </Col>
        </Col>
      </div>
    );
  }
}

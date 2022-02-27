import React, { Component, createRef } from "react";
import DanceParty from "../../DancePartyUtils/P5Utils/p5.dance";
import ResourceLoader from "../../DancePartyUtils/P5Utils/ResourceLoader";
import hammer from "../../DancePartyUtils/P5Utils/metadata/hammer.json";
import injectInterpreted from "../../DancePartyUtils/P5Utils/injectInterpreted";
import constants from "../../DancePartyUtils/P5Utils/constants";

//utils
import Page from "../../components/utils/Page";

// eslint-disable-next-line import/no-webpack-loader-syntax
import interpreted from "!!raw-loader!../../DancePartyUtils/P5Utils/p5.dance.interpreted.js";

import "./dance.css";

// Components
import DancePartyBlockly from "../../components/DancePartyBlockly";
import StageCircles from "../../components/DancePartyBlockly/StageCircles";
import TabsInPills from "../../components/elements/TabsInPills";
import Hints from "../../components/DancePartyBlockly/Hints";
import Instructions from "../../components/DancePartyBlockly/Instructions";
import { Button, Select } from "../../components/forms";
// codeMirror
import CodeMirror from "../../components/DancePartyBlockly/CodeMirror";

// icons
const playIcon = (
  <svg
    className="mr-2 w-4 h-4"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.8553 13.8462L3.94856 23.0758C2.59863 23.8583 0.866211 22.9108 0.866211 21.3334V2.87429C0.866211 1.29936 2.59613 0.34941 3.94856 1.13437L19.8553 10.3639C20.1624 10.5392 20.4176 10.7926 20.5952 11.0984C20.7727 11.4042 20.8662 11.7515 20.8662 12.1051C20.8662 12.4587 20.7727 12.806 20.5952 13.1118C20.4176 13.4176 20.1624 13.6709 19.8553 13.8462V13.8462Z"
      fill="#44CB49"
    />
  </svg>
);

const stopIcon = (
  <svg
    className="mr-2 w-4 h-4"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.61654 0.911133H16.9499C17.8339 0.911133 18.6818 1.26232 19.3069 1.88744C19.932 2.51256 20.2832 3.36041 20.2832 4.24447V17.5778C20.2832 18.4619 19.932 19.3097 19.3069 19.9348C18.6818 20.5599 17.8339 20.9111 16.9499 20.9111H3.61654C2.73248 20.9111 1.88464 20.5599 1.25951 19.9348C0.634393 19.3097 0.283203 18.4619 0.283203 17.5778V4.24447C0.283203 3.36041 0.634393 2.51256 1.25951 1.88744C1.88464 1.26232 2.73248 0.911133 3.61654 0.911133V0.911133Z"
      fill="#FF5858"
    />
  </svg>
);

const hintIcon = (
  <svg
    className="mr-2 w-4 h-4"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4209 1.20898C11.4209 0.943768 11.3155 0.689414 11.128 0.501878C10.9405 0.314341 10.6861 0.208984 10.4209 0.208984C10.1557 0.208984 9.90133 0.314341 9.71379 0.501878C9.52626 0.689414 9.4209 0.943768 9.4209 1.20898V2.20898C9.4209 2.4742 9.52626 2.72855 9.71379 2.91609C9.90133 3.10363 10.1557 3.20898 10.4209 3.20898C10.6861 3.20898 10.9405 3.10363 11.128 2.91609C11.3155 2.72855 11.4209 2.4742 11.4209 2.20898V1.20898ZM4.6279 3.00198C4.4393 2.81983 4.18669 2.71903 3.9245 2.72131C3.6623 2.72359 3.41149 2.82876 3.22608 3.01417C3.04067 3.19957 2.9355 3.45039 2.93322 3.71258C2.93095 3.97478 3.03174 4.22738 3.2139 4.41598L4.2139 5.41598C4.4025 5.59814 4.6551 5.69894 4.9173 5.69666C5.1795 5.69438 5.43031 5.58921 5.61572 5.4038C5.80113 5.21839 5.90629 4.96758 5.90857 4.70539C5.91085 4.44319 5.81006 4.19059 5.6279 4.00198L4.6279 3.00198ZM17.6279 4.41598C17.8101 4.22738 17.9109 3.97478 17.9086 3.71258C17.9063 3.45039 17.8011 3.19957 17.6157 3.01417C17.4303 2.82876 17.1795 2.72359 16.9173 2.72131C16.6551 2.71903 16.4025 2.81983 16.2139 3.00198L15.2139 4.00198C15.0317 4.19059 14.9309 4.44319 14.9332 4.70539C14.9355 4.96758 15.0407 5.21839 15.2261 5.4038C15.4115 5.58921 15.6623 5.69438 15.9245 5.69666C16.1867 5.69894 16.4393 5.59814 16.6279 5.41598L17.6279 4.41598ZM10.4209 4.20898C9.13193 4.2089 7.8772 4.62392 6.8425 5.39258C5.8078 6.16124 5.04815 7.24267 4.67601 8.47675C4.30388 9.71084 4.33906 11.032 4.77634 12.2445C5.21362 13.457 6.02976 14.4965 7.1039 15.209H13.7379C14.812 14.4965 15.6282 13.457 16.0655 12.2445C16.5027 11.032 16.5379 9.71084 16.1658 8.47675C15.7937 7.24267 15.034 6.16124 13.9993 5.39258C12.9646 4.62392 11.7099 4.2089 10.4209 4.20898V4.20898ZM13.4209 16.209H7.4209V17.209C7.4209 18.0046 7.73697 18.7677 8.29958 19.3303C8.86219 19.8929 9.62525 20.209 10.4209 20.209C11.2165 20.209 11.9796 19.8929 12.5422 19.3303C13.1048 18.7677 13.4209 18.0046 13.4209 17.209V16.209ZM1.4209 9.20898C1.15568 9.20898 0.901328 9.31434 0.713792 9.50188C0.526255 9.68941 0.420898 9.94377 0.420898 10.209C0.420898 10.4742 0.526255 10.7286 0.713792 10.9161C0.901328 11.1036 1.15568 11.209 1.4209 11.209H2.4209C2.68611 11.209 2.94047 11.1036 3.12801 10.9161C3.31554 10.7286 3.4209 10.4742 3.4209 10.209C3.4209 9.94377 3.31554 9.68941 3.12801 9.50188C2.94047 9.31434 2.68611 9.20898 2.4209 9.20898H1.4209ZM18.4209 9.20898C18.1557 9.20898 17.9013 9.31434 17.7138 9.50188C17.5263 9.68941 17.4209 9.94377 17.4209 10.209C17.4209 10.4742 17.5263 10.7286 17.7138 10.9161C17.9013 11.1036 18.1557 11.209 18.4209 11.209H19.4209C19.6861 11.209 19.9405 11.1036 20.128 10.9161C20.3155 10.7286 20.4209 10.4742 20.4209 10.209C20.4209 9.94377 20.3155 9.68941 20.128 9.50188C19.9405 9.31434 19.6861 9.20898 19.4209 9.20898H18.4209Z"
      fill="#FBB615"
    />
  </svg>
);

const instructionIcon = (
  <svg
    className="mr-2 w-5 h-5"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7881 4.5C13.1631 4.5 11.4131 4.83333 10.2048 5.75C8.99642 4.83333 7.24642 4.5 5.62142 4.5C4.41309 4.5 3.12975 4.68333 2.05475 5.15833C1.44642 5.43333 1.03809 6.025 1.03809 6.7V16.1C1.03809 17.1833 2.05475 17.9833 3.10475 17.7167C3.92142 17.5083 4.78809 17.4167 5.62142 17.4167C6.92142 17.4167 8.30475 17.6333 9.42142 18.1833C9.92142 18.4333 10.4881 18.4333 10.9798 18.1833C12.0964 17.625 13.4798 17.4167 14.7798 17.4167C15.6131 17.4167 16.4798 17.5083 17.2964 17.7167C18.3464 17.9917 19.3631 17.1917 19.3631 16.1V6.7C19.3631 6.025 18.9548 5.43333 18.3464 5.15833C17.2798 4.68333 15.9964 4.5 14.7881 4.5V4.5ZM17.7048 15.1083C17.7048 15.6333 17.2214 16.0167 16.7048 15.925C16.0798 15.8083 15.4298 15.7583 14.7881 15.7583C13.3714 15.7583 11.3298 16.3 10.2048 17.0083V7.41667C11.3298 6.70833 13.3714 6.16667 14.7881 6.16667C15.5548 6.16667 16.3131 6.24167 17.0381 6.4C17.4214 6.48333 17.7048 6.825 17.7048 7.21667V15.1083Z"
      fill="white"
    />
    <path
      d="M11.8553 9.92455C11.5886 9.92455 11.347 9.75789 11.2636 9.49122C11.1553 9.16622 11.3386 8.80789 11.6636 8.70789C12.947 8.29122 14.6053 8.15789 16.1303 8.33289C16.472 8.37455 16.722 8.68289 16.6803 9.02455C16.6386 9.36622 16.3303 9.61622 15.9886 9.57455C14.6386 9.41622 13.1636 9.54122 12.047 9.89955C11.9803 9.90789 11.9136 9.92455 11.8553 9.92455V9.92455ZM11.8553 12.1412C11.5886 12.1412 11.347 11.9746 11.2636 11.7079C11.1553 11.3829 11.3386 11.0246 11.6636 10.9246C12.9386 10.5079 14.6053 10.3746 16.1303 10.5496C16.472 10.5912 16.722 10.8996 16.6803 11.2412C16.6386 11.5829 16.3303 11.8329 15.9886 11.7912C14.6386 11.6329 13.1636 11.7579 12.047 12.1162C11.9843 12.1322 11.92 12.1406 11.8553 12.1412V12.1412ZM11.8553 14.3579C11.5886 14.3579 11.347 14.1912 11.2636 13.9246C11.1553 13.5996 11.3386 13.2412 11.6636 13.1412C12.9386 12.7246 14.6053 12.5912 16.1303 12.7662C16.472 12.8079 16.722 13.1162 16.6803 13.4579C16.6386 13.7996 16.3303 14.0412 15.9886 14.0079C14.6386 13.8496 13.1636 13.9746 12.047 14.3329C11.9843 14.3489 11.92 14.3573 11.8553 14.3579V14.3579Z"
      fill="white"
    />
  </svg>
);

const resetIcon = (
  <svg
    className="mr-2 w-4 h-4"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4895 10.7682C18.4901 12.4864 17.9127 14.1527 16.854 15.4884C15.7953 16.8241 14.3194 17.7483 12.6732 18.1062C11.027 18.4642 9.31029 18.2343 7.81024 17.455C6.31019 16.6756 5.11775 15.3942 4.43235 13.8249L2.16133 14.7665C3.06162 16.8723 4.64465 18.5975 6.6443 19.652C8.64395 20.7065 10.9383 21.026 13.1415 20.5568C15.3448 20.0877 17.3227 18.8584 18.7426 17.0758C20.1625 15.2931 20.9379 13.0658 20.9385 10.7682C20.9386 8.68102 20.299 6.64616 19.1093 4.94875C17.9196 3.25135 16.2395 1.97648 14.3044 1.30281C12.3693 0.629146 10.2762 0.590449 8.31851 1.19215C6.3608 1.79384 4.63656 3.00577 3.38746 4.65809V1.60139H0.938477V8.26813L2.16297 9.51814H7.87725V7.01811H4.77848C5.58681 5.58755 6.83508 4.46935 8.32958 3.83703C9.82408 3.20471 11.4812 3.09362 13.0439 3.52102C14.6066 3.94842 15.9873 4.89039 16.972 6.20077C17.9566 7.51115 18.49 9.11666 18.4895 10.7682Z"
      fill="white"
    />
  </svg>
);

export default class Dance extends Component {
  constructor(props) {
    super(props);
    this.myDanceBoxRef = createRef();
    // this.initSongsPromise = this.initSongs(config);
    this.state = {
      tabItems: ["Canvas", "Code"],
      currentTab: "Canvas",
      show: false,
      showInstructions: true,
      showHints: false,
      nativeAPI: { isLoading: true },
      songName: { id: "song-choose", name: "Choose a song to play" },
    };
  }

  componentDidMount() {
    let temp = constants.SONG_NAMES.map((song) => ({
      id: song,
      name: song,
    }));
    const nativeAPI = (window.nativeAPI = new DanceParty({
      songs: temp,
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
  };

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

    await this.state.nativeAPI.playSong(this.state.songName.id);

    this.state.nativeAPI.play(hammer);

    this.setState({
      currentActivity: window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      ),
    });

    // this.saveProgress(this.state.currentActivity);cl
    this.setState({ runLoading: false });
    console.log("onRun" + this.state.currentActivity);
  };

  onStop = () => {
    this.state.nativeAPI.reset();
    this.state.nativeAPI.stopSong(this.state.songName.id);
  };

  handleChange = (event) => {
    let dancePartyCode = this.state.dancePartyCode;
    dancePartyCode = event.Code.value;
    this.setState({ dancePartyCode });
  };

  handleSongChange = (song) => {
    this.setState({ songName: { id: song.id, name: song.name } });
    // console.log("song name is ", this.state.songName);
  };

  handleVolume = (event) => {
    this.setState({ volumeValue: event.target.value });
  };

  setCode = (code) => {
    this.setState({ dancePartyCode: code });
  };

  tabChange = (tab) => {
    this.setState({ currentTab: tab });
  };

  loadingBar = (<div id="p5_loading">Loading...</div>);

  songs = constants.SONG_NAMES.map((song) => ({ id: song, name: song }));

  render() {
    return (
      <>
        <Page title="Workspace | TPH Dance Party">
          <div className="w-screen h-full flex bg-tph_purple">
            <div className="px-3 py-5">
              <Select
                name={"songs"}
                items={this.songs}
                currentItem={this.state.songName}
                handleChange={(event) => this.handleSongChange(event)}
              />
              <div className="mt-12 mb-4">
                <TabsInPills
                  items={this.state.tabItems}
                  currentTab={this.state.currentTab}
                  handleTabChange={this.tabChange}
                />
              </div>
              <div
                className={`${
                  this.state.currentTab === "Canvas" ? "block" : "hidden"
                } mx-auto my-4`}
                style={{ width: "100%" }}
                ref={this.myDanceBoxRef}
              ></div>

              <div
                className={`${
                  this.state.currentTab === "Code" ? "block" : "hidden"
                } mx-auto my-4`}
              >
                <CodeMirror value={this.state.dancePartyCode} />
              </div>
              <div className="flex space-x-2">
                <Button
                  type={"button"}
                  variant={"primary"}
                  prefixIcon={playIcon}
                  label={"Play"}
                  handleClick={this.onRun}
                />
                <Button
                  type={"button"}
                  variant={"primary"}
                  prefixIcon={stopIcon}
                  label={"Stop"}
                  handleClick={this.onStop}
                />
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="px-5 py-3 bg-icon_bg flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5).keys()].map((i, index) => (
                    <div key={index}>
                      <StageCircles item={i} />
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    type={"button"}
                    variant={"border"}
                    prefixIcon={hintIcon}
                    label={"Hints"}
                    handleClick={() =>
                      this.setState({
                        showHints: !this.state.showHints,
                      })
                    }
                  />
                  <Button
                    type={"button"}
                    variant={"border"}
                    prefixIcon={instructionIcon}
                    label={"Instructions"}
                    handleClick={() =>
                      this.setState({
                        showInstructions: !this.state.showInstructions,
                      })
                    }
                  />
                  <Button
                    type={"button"}
                    variant={"border"}
                    prefixIcon={resetIcon}
                    label={"Reset"}
                    handleClick={() => console.log("restart")}
                  />
                </div>
              </div>

              {/* Hints */}
              <Hints showHints={this.state.showHints} />

              {/* Instructions */}
              <div
                className={`p-2 pt-0 bg-icon_bg w-full ${
                  this.state.showInstructions ? "block" : "hidden"
                }`}
              >
                <Instructions />
              </div>

              <div className="h-full">
                <DancePartyBlockly setCode={this.setCode} />
              </div>
            </div>
          </div>
        </Page>
      </>
    );
  }
}

import {useState, useEffect} from "react";
import axios from "axios";


export const useHintHook = (currentActivity) => {
	const [hintsData, setHintsData] = useState({});
  const [nextBtnShow, setNextBtnShow] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const initialVisitedState = [{ id: 1, visited: true }];
  const [visitedHint, setVisitedHint] = useState(initialVisitedState);
  const [renderCount, setRenderCount] = useState({ count: 0 });



  	//for tooltip
	const [hide, setHide] = useState(false);
	const [show, setShow] = useState(null);


	//levelId
  	const [activityId, setActivityId] = useState(0);

  	const [nextInt, setNextInt] = useState({ count: 0 });
  	const [prevInt, setprevInt] = useState({ count: 0 });


  	// const itemId = nextInt.count;
  	const [itemId, setItemId] = useState({ count: 0 });


	//fetcing activity id that's related with level_id
  const fetchActivityId = async (currentActivity) => {
    try {
      // const response = await fetch(
      //   `${process.env.REACT_APP_API_URL}activities/`
      // );

      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}activities`,
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
        },
      });

      const json = await response.data;
      const activity = await json.filter((item) => {
        return item.level_id === currentActivity;
      });
      const activityId = activity[0].id;
      setActivityId(activityId);
    } catch (error) {
      console.log(error);
    }
  };

  //fetching hints related with activity_id
  const fetchHints = async (activityId) => {
    try {
      // const activities = await fetch("http://localhost:8000/activities/");
      // const activitiesJson = await response.json();
      // const activity = activitiesJson.filter((item) => {
      //   return item.level_id === currentActivity; //replace this with item.id ==== currentActivity
      // });

      // const response = await fetch(
      //   `${process.env.REACT_APP_API_URL}activities/${activityId}/hints`
      // );

      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}activities/${activityId}/hints`,
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
        },
      });

      const json = await response.data;
      const activity = json.filter((item) => item.activity_id === activityId);
      const activityLength = json.filter(
        (item) => item.activity_id === activityId
      );
      const hint_int = activity.length;

      //reseting values
      setNextInt({ count: 0 });
      setprevInt({ count: 0 });
      setItemId({ count: 0 });

      const hintInstruction = activity[0].instructions;
      const hintReplace = hintInstruction.replace(/(\r\n|\n|\r)/gm, "");
      const hintParse = JSON.parse(hintReplace);
      setHintsData(hintParse);
      setHide(false);
      setShow(true);
      setNextBtnShow(false);
      setDataLength(activityLength.length - 1);
      if (hint_int <= 1) {
        setHide(true);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

///
  const dynamicHints = async (itemId) => {
      try {
        // const response = await fetch(
        //   `${process.env.REACT_APP_API_URL}activities/${activityId}/hints`
        // );

        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}activities/${activityId}/hints`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Accept: "application/json",
          },
        });

        const json = await response.data;
        const activity = json.filter((item) => item.activity_id === activityId);
        const activityLength = json.filter(
          (item) => item.activity_id === activityId
        );
        const hint_int = activity.length;

        const hintNo = activity[itemId.count].hint_no;

        setRenderCount((prev) => ({
          count: prev.count + 1,
        }));

        const hintInstruction = activity[itemId.count].instructions;

        const hintReplace = hintInstruction.replace(/(\r\n|\n|\r)/gm, "");

        console.log("hint replace" + hintReplace);
        console.log("hint instr" + hintInstruction);

        const hintParse = JSON.parse(hintReplace);
        setHintsData(hintParse);
        setHide(false);
        setDataLength(activityLength.length - 1);

        //to get visited hint, not necessary to add visited:  true
        setVisitedHint([...visitedHint, { id: hintNo, visited: true }]);
      } catch (error) {
        console.log(error);
      }
    };

  //useEffct for fectHints
  useEffect(() => {
    fetchActivityId(currentActivity);
    fetchHints(activityId);
    setVisitedHint(initialVisitedState);
  }, [currentActivity, activityId]);

  useEffect(() => {
    dynamicHints(itemId);
  }, [itemId]);


  return {
    hintsData,
    nextBtnShow,
    setNextBtnShow,
    dataLength, 
    initialVisitedState, 
    visitedHint, 
    hide, 
    show, 
    setHide, 
    setShow, 
    activityId, 
    nextInt, 
    setNextInt,
    prevInt, 
    setprevInt, 
    itemId, 
    setItemId, 
    renderCount};
};
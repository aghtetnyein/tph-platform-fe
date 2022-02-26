import React from "react";

//Components
import { DashboardTitle, Footer } from "../../components/elements";
import { Button } from "../../components/forms";

//images
import gallaryTitle from "../../assets/images/gallary-title.svg";
import zattThabinHistory from "../../assets/images/zatt-thabin-history.png";
import quoteMark1 from "../../assets/images/quotation-marks-1.svg";
import quoteMark2 from "../../assets/images/quotation-marks-2.svg";
import dance1 from "../../assets/images/dance-1.png";
import dance2 from "../../assets/images/dance-2.png";
import traditions from "../../assets/images/traditions.png";

// constants
const likeButton = (
  <svg
    className="mr-1.5 w-4 h-4"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.98791 0.0549033C10.5702 5.73763 7.23283 8.10772 6.28711 8.65918C6.29493 8.71784 6.29883 8.78042 6.29883 8.84299V16.9506L7.85418 17.8071H16.0335C16.0491 17.8071 16.0686 17.8071 16.0843 17.811C17.9679 18.0691 18.0421 15.8398 18.0421 15.5621C18.0304 15.4214 18.1086 15.2806 18.2453 15.2219C19.4255 14.7135 18.9253 13.1178 18.8784 12.9809C18.8159 12.8205 18.8901 12.6367 19.0465 12.5585C20.5784 11.8154 19.6131 10.4778 19.4881 10.3096C19.3865 10.2001 19.3708 10.0319 19.4529 9.89897C22.2275 5.63986 13.5597 6.69193 13.0048 6.76232C12.9618 6.77015 12.9149 6.77406 12.868 6.76232C12.6844 6.72713 12.5671 6.55113 12.6023 6.36731C13.8958 -0.191492 10.9141 -0.121093 9.98009 0.0470813L9.98791 0.0549033Z"
      fill="#666666"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.74464 17.0484V8.84301C5.74464 8.64746 5.66648 8.47146 5.53752 8.34631C5.40856 8.21724 5.2327 8.13902 5.04121 8.13902H0.703425C0.508029 8.13902 0.332173 8.21724 0.20712 8.34631C0.0781584 8.47537 0 8.65137 0 8.84301V17.0484C0 17.2439 0.0781584 17.4199 0.20712 17.5451C0.336081 17.6741 0.511937 17.7523 0.703425 17.7523H5.04121C5.23661 17.7523 5.41247 17.6741 5.53752 17.5451C5.64303 17.4395 5.71338 17.3026 5.73682 17.15C5.73682 17.1266 5.73682 17.0992 5.74464 17.0757C5.74464 17.0679 5.74464 17.0562 5.74464 17.0484Z"
      fill="#666666"
    />
  </svg>
);

const DancePartyCharacterGallery = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-16 mb-14 relative">
          <img
            className="w-[30em] z-10"
            src={gallaryTitle}
            alt="gallery-title"
          ></img>
          <div className="border-b-[3px] w-[90%] absolute m-auto top-[47%]"></div>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto h-full">
          <div>
            <div className="mb-8 flex justify-between">
              <DashboardTitle title={"ဇာတ်သဘင်၏သမိုင်း"} />
              <div className="w-40">
                <Button
                  variant={"secondary"}
                  label={"Like"}
                  prefixIcon={likeButton}
                />
              </div>
            </div>
            <div className="text-sm md:text-md leading-8 md:leading-8">
              ဇာတ်ပွဲသည်၁၈ရာစုနှောင်းပိုင်းမှယနေ့ထိတိုင်တည်တံပြီးဆက်လက်တိုးတက်ကျော်ကြားနေသော
              ညလုံးပေါက်ကပြရသောဖျော်ဖြေမှုတစ်မျိုးဖြစ်သည်။ “ဇာတ်ပွဲ”
              စကားလုံးတွင်ပါဝင်သော “ဇာတ်” သည်ဗုဒ္ဓဟောကြားခဲ့သော
              ၅၅၀နိပါတ်တော်(ဝါ)ဇာတကမှ လာသည်ဟုယူဆနိုင်သည်။ ဇာတ်ပွဲပုံစံကို
              ဇာတကများကို
              ကပြသည့်ရုပ်သေးရုပ်ကနေပုံကိုလူများတုပ၍ကရာမှစသည်ဟုဆိုနိုင်သည်။
              ၁၈ရာစုနှောင်းပိုင်းတွင်ရုပ်သေးပွဲနှင့် နန်းတွင်းအနုပညာရှင်များ
              ပါဝင်သောအမြင့်ဇာတ်နှင့်ဇာတ်ပွဲများတွင် ကပြသောကခြေသည်များပါသော
              အနိမ့်ဇာတ်ဟုခွဲခဲ့သည်။ မြန်မာနိုင်ငံ၁၈၈၅အပြီး ဗြိတိသျှလက်အောက်
              ကျရောက်ခဲ့ပြီးနောက်နန်းတွင်းအနုပညာရှင်အတော်များများအနိမ့်ဇာတ်ရှိဇာတ်အဖွဲ့များကိုဝင်ရောက်လုပ်ကိုင်လာကြသည်။ဘုရားပွဲနှင့်ကျေးလက်ဒေသများတွင်နွားလှည်းများဝန်းရံ၍အလယ်မြေကွက်လပ်တွင်ဖျော်ဖြေကပြသောမြေဝိုင်းသဘင်များပေါ်ပေါက်လာသည်။နန်းတွင်းအနုပညာရှင်များမြေဝိုင်းသဘင်တွင်ပါဝင်ဖျော်ဖြေလာခြင်းသည်ဇာတ်ပွဲများတိုးတက်လာစေရန်အတော်အထောက်အကူပြုခဲ့သည်။
            </div>
            <div className="mt-16 mb-16">
              <img src={zattThabinHistory} alt="zatt-thabin-history"></img>
            </div>
          </div>

          <div className="mb-16">
            <DashboardTitle title={"ဇာတ်ပွဲ၏အနုပညာ"} />
            <div className="mt-8 text-sm md:text-md leading-8 md:leading-8">
              ပါဝင်ဖျော်ဖြေသောအနုပညာရှင်များမှာအဆိုအကပညာရှင်(မင်းသား၊မင်းသမီး)၊ဆိုင်းဝိုင်းမှအတီးအမှုတ်ပညာရှင်၊လူရွှင်တော်များတို့ဖြစ်သည်။ဤသို့အနုပညာရှင်ပေါင်းစုံပါဝင်၍ဖျော်ဖြေမှုကြောင့်ဇာတ်ပွဲသည်
              ယဉ်ကျေးမှုအနုပညာပေါင်းစုံရောပွန်းပါဝင်သောဖန်တီးမှုတစ်ရပ်ဖြစ်လာသည်။
              ဇာတ်မင်းသား၊မင်းသမီးတို့၏ရှေးနန်းမူများထင်ဟပ်သောကကွက်များ၊ဆိုင်းဆရာရွာစား၏မြူးကြွသောတီးလုံးများ၊လူရွှင်တော်များ၏လူမှုဘဝကိုထင်ဟပ်သောပြက်လုံးများကြောင့်ဇာတ်ပွဲလာပရိသတ်တို့စိတ်ခံစားမှုရသမျိုးစုံကိုညလုံးပေါက်ရရှိရသည်။
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between w-[85%] mx-auto">
            <div>
              <img className="" src={quoteMark1} alt={"front-quoteMark"}></img>
            </div>
            <div>
              <img className="" src={quoteMark2} alt={"back-quoteMark"}></img>
            </div>
          </div>

          <div className="text-xl md:text-2xl lg:px-8 lg:py-2 font-bold md:leading-[4rem] leading-[3rem] w-[80%] text-center mx-auto">
            မြန်မာ့ဇာတ်ပွဲများသည် ရိုးရာယဉ်ကျေးမှု၊ ဘာသာတရားအဆုံးအမ၊
            ခေတ်သစ်အမြင်များ ပေါင်းစည်းမှုတို့နှင့်အတူ ယနေ့ခေတ်တိုင်
            ရှင်သန်တိုးတက်နေသော အနုပညာတစ်ရပ်ဖြစ်နေဆဲဖြစ်သည်။
          </div>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto h-full mt-16">
          <div className="grid gap-0 md:grid-cols-2">
            <img
              src={dance1}
              alt="dance1"
              className="h-[100%] md:h-[90%]"
            ></img>
            <img
              src={dance2}
              alt="dance2"
              className="h-[100%] md:h-[90%]"
            ></img>
          </div>

          <div className="mb-8 mt-4">
            <DashboardTitle title={"ယဉ်ကျေးမှုအပေါ်လွှမ်းမိုးမှု"} />
          </div>

          <div className="text-sm md:text-base md:leading-8 leading-8">
            ဇာတ်ပွဲများစတင်ပေါ်ပေါက်စဉ်ကဇာတကများကပြလေ့ရှိသောကြောင့်
            ဇာတ်ပွဲများကို ဘုရားပွဲကဲ့သို့သော ဘာသာရေးဆိုင်ရာပွဲများတွင်
            တွေ့ရလေ့ရှိသည်။ ဇာတ်ပွဲများသည် စတင်ပေါ်ပေါက်ချိန်မှပင်
            သာမန်လူတန်းစားနှင့်ပိုမိုနီးစပ်သော အနိမ့်ဇာတ်ဖြစ်သောကြောင့်
            လူထုကြားအတော်ရေပန်းစားလေသည်။
            ဇာတ်အဖွဲ့များတွင်နန်းတွင်းပညာရှင်များပါဝင်လာခြင်းသည်ဇာတ်ပွဲများယဉ်ကျေးမှု၊အနုပညာများပေါင်းဆုံစေသည့်အခွင့်အရေးဖြစ်လာသည်။
            ဇာတ်ပွဲများတွင်ပါဝင်ဖျော်ဖြေသောအနုပညာရှင်များလည်းတိုးလာပြီး
            ခိုင်လုံသောဇာတ်ပွဲအသွင်ဆောင်လာသည်။
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <img
            src={traditions}
            className="md:w-[45%] w-[80%]"
            alt="traditions"
          ></img>
        </div>
        <div className="flex justify-center mt-16">
          <div className="pl-4 text-1xl italic h-full pt-2 pb-2">
            Explore more articles
          </div>
        </div>
        <div className="border-b-2 border-tph_gold w-[75px] mx-auto"></div>

        <div className="grid md:grid-cols-3 w-[70%] lg:w-[50%] gap-4 mx-auto mt-14 mb-16">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex bg-tertiary_white w-full h-[76px] border-primary_grey rounded-md"
            >
              <div className="md:text-lg w-[60%] h-full flex justify-center items-center">
                <p className="text-sm font-semibold">Article {i + 1}</p>
              </div>
              <div className="w-[40%] h-full">
                <img
                  src={dance2}
                  alt="dance2"
                  className="h-full w-full object-cover rounded-r-md"
                ></img>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DancePartyCharacterGallery;

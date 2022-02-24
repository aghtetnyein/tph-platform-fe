import React, { useState } from "react";

//images
import gallaryTitle from "../../assets/images/gallary-title.svg";
import zattThabinHistory from "../../assets/images/zatt-thabin-history.png";
import quoteMark1 from "../../assets/images/quotation-marks-1.svg";
import quoteMark2 from "../../assets/images/quotation-marks-2.svg";
import dance1 from "../../assets/images/dance-1.png";
import dance2 from "../../assets/images/dance-2.png";
import traditions from "../../assets/images/traditions.png";

const DancePartyCharacterGallery = () => {
	
	return (
		<>	
			<div className="pb-32">
				<div className="flex justify-center mt-16 mb-14 relative">
					<img className="w-[30em] z-10" src={gallaryTitle} alt="gallery-title"></img>
					<div className="border-b-[3px] w-[90%] absolute m-auto top-[47%]"></div>
				</div>
				<div className="w-[70%] mx-auto h-full">
					<div>
						<div className="mb-14">
							<div className="border-l-2 pl-4 text-4xl border-tph_gold font-bold h-full pt-2 pb-2">ဇာတ်သဘင်၏သမိုင်း</div>
							<div></div>
						</div>
						<div className="leading-8">
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
						<div className="border-l-2 pl-4 text-4xl border-tph_gold font-bold h-full pt-2 pb-2 mb-14">ဇာတ်ပွဲ၏အနုပညာ</div>
						<div className="leading-8">
							ပါဝင်ဖျော်ဖြေသောအနုပညာရှင်များမှာအဆိုအကပညာရှင်(မင်းသား၊မင်းသမီး)၊ဆိုင်းဝိုင်းမှအတီးအမှုတ်ပညာရှင်၊လူရွှင်တော်များတို့ဖြစ်သည်။ဤသို့အနုပညာရှင်ပေါင်းစုံပါဝင်၍ဖျော်ဖြေမှုကြောင့်ဇာတ်ပွဲသည်
							ယဉ်ကျေးမှုအနုပညာပေါင်းစုံရောပွန်းပါဝင်သောဖန်တီးမှုတစ်ရပ်ဖြစ်လာသည်။
							ဇာတ်မင်းသား၊မင်းသမီးတို့၏ရှေးနန်းမူများထင်ဟပ်သောကကွက်များ၊ဆိုင်းဆရာရွာစား၏မြူးကြွသောတီးလုံးများ၊လူရွှင်တော်များ၏လူမှုဘဝကိုထင်ဟပ်သောပြက်လုံးများကြောင့်ဇာတ်ပွဲလာပရိသတ်တို့စိတ်ခံစားမှုရသမျိုးစုံကိုညလုံးပေါက်ရရှိရသည်။
						</div>
					</div>
				</div>
				<div className="w-[90%] mx-auto">
					<div className="flex justify-between w-[85%] mx-auto">
						<div><img className="" src={quoteMark1}></img></div>
						<div><img className="" src={quoteMark2}></img></div>
					</div>
			            
		            <div className="text-4xl font-bold leading-[4rem] w-[80%] text-center mx-auto">
		              မြန်မာ့ဇာတ်ပွဲများသည် ရိုးရာယဉ်ကျေးမှု၊ ဘာသာတရားအဆုံးအမ၊
		              ခေတ်သစ်အမြင်များ ပေါင်းစည်းမှုတို့နှင့်အတူ ယနေ့ခေတ်တိုင်
		              ရှင်သန်တိုးတက်နေသော အနုပညာတစ်ရပ်ဖြစ်နေဆဲဖြစ်သည်။
		            </div>           
			    </div>

			    <div className="w-[70%] mx-auto h-full mt-16">
			    	<div className="grid gap-0 md:grid-cols-2">
			    		<img src={dance1} alt="dance1" className="h-[90%]"></img>
			    		<img src={dance2} alt="dance2" className="h-[90%]"></img>
			    	</div>

			    	<div className="mb-14 mt-4">
						<div className="border-l-2 pl-4 text-4xl border-tph_gold font-bold h-full pt-2 pb-2">ယဉ်ကျေးမှုအပေါ်လွှမ်းမိုးမှု</div>
					</div>

					<div className="leading-8">
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
			    	<img src={traditions} className="w-[40%] h-[40%]" alt="traditions"></img>
			    </div>
			    <div className="flex justify-center mt-16">
			    	<div className="pl-4 text-1xl italic h-full pt-2 pb-2">Explore more articles</div>
			    </div>
			    <div className="border-b-2 border-tph_gold w-[6%] mx-auto"></div>
			</div>
		</>
	)
};

export default DancePartyCharacterGallery;
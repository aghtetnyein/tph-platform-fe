import React from "react";

const ToolTip = () => {
	return (
			<>
				<div className="w-[95px] h-[40px] bg-tph_tool_tip p-1.5 absolute text-primary_white flex justify-center items-center rounded right-[96%]">
		            Click Me
		            <div className="w-3.5 h-3.5 bg-tph_tool_tip absolute left-[93%] rotate-45"></div>
	          	</div>
			</>
		)
};
export default ToolTip;
import React from "react";
// icons
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div>
      <div className="bg-tph_purple px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40 text-white border-b border-gray-300">
        <div className="lg:flex lg:justify-between">
          <div>
            <div className="flex">
              <h5 className="text-base font-bold text-white px-4 pl-0 border-r-2 border-gray-200">
                Contact us
              </h5>
              <h5 className="text-base font-bold text-white px-4 border-r-2 border-gray-200">
                Help & Support
              </h5>
              <h5 className="text-base font-bold text-white px-4">
                Terms & Conditions
              </h5>
            </div>
            <div className="flex flex-col mt-12 space-y-4">
              <div className="flex items-center space-x-5">
                <PhoneIcon className="block h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold text-white">
                  (+95)774536223
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <MailIcon className="block h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold text-white">
                  hello@thatepanhub.com
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <LocationMarkerIcon
                  className="block h-5 w-5"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-white">
                  149 (C), Myakanthar Road, Kamaryut Township, Yangon, Myanmar,
                  11041
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <h5 className="text-base font-bold text-white">Follow us on</h5>
            <div className="flex space-x-3 mt-8">
              <div className="border p-2 rounded-sm">
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNC40OTE3MyAyNS40MTAxMyw2Mi45NzQ5MyA1OC41MTQ0LDY3Ljk1MTQ3di00OS43MTk0N2gtMTcuMDIyMjd2LTE4LjA4MjkzaDE3LjAyMjI3di0xMi4wMzQyN2MwLC0xOS45MjMzMyA5LjcwNjUzLC0yOC42NjY2NyAyNi4yNjQ0LC0yOC42NjY2N2M3LjkyOTIsMCAxMi4xMjYsMC41OTA1MyAxNC4xMDk3MywwLjg1NDI3djE1Ljc4Mzg3aC0xMS4yOTQ2N2MtNy4wMjkwNywwIC05LjQ4MjkzLDYuNjY3ODcgLTkuNDgyOTMsMTQuMTc4NTN2OS44ODQyN2gyMC41OTk4N2wtMi43OTIxMywxOC4wODI5M2gtMTcuODA3NzN2NDkuODYyOGMzMy41ODAxMywtNC41NTIyNyA1OS40ODkwNywtMzMuMjY0OCA1OS40ODkwNywtNjguMDk0OGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </div>
              <div className="border p-2 rounded-sm">
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE2MC41MzMzMywzOS43NzIxM2MtNS40ODY4LDIuNDM2NjcgLTExLjM4MDY3LDQuMDc2NCAtMTcuNTY2OTMsNC44MTZjNi4zMTgxMywtMy43ODQgMTEuMTYyOCwtOS43NzUzMyAxMy40NDQ2NywtMTYuOTE5MDdjLTUuOTA1MzMsMy41MDMwNyAtMTIuNDUyOCw2LjA0ODY3IC0xOS40MjQ1Myw3LjQyNDY3Yy01LjU3ODUzLC01Ljk0NTQ3IC0xMy41MjQ5MywtOS42NjA2NyAtMjIuMzE5ODcsLTkuNjYwNjdjLTE2Ljg5MDQsMCAtMzAuNTgxNiwxMy42OTY5MyAtMzAuNTgxNiwzMC41ODE2YzAsMi4zOTY1MyAwLjI3NTIsNC43MzU3MyAwLjc5MTIsNi45NjZjLTI1LjQxNTg3LC0xLjI3MjggLTQ3Ljk0Nzg3LC0xMy40NTA0IC02My4wMzgsLTMxLjk1NzZjLTIuNjI1ODcsNC41MTc4NyAtNC4xMzM3Myw5Ljc2OTYgLTQuMTMzNzMsMTUuMzgyNTNjMCwxMC42MDY2NyA1LjM5NTA3LDE5Ljk2OTIgMTMuNTk5NDcsMjUuNDUwMjdjLTUuMDEwOTMsLTAuMTYwNTMgLTkuNzI5NDcsLTEuNTM2NTMgLTEzLjg1MTczLC0zLjgyNDEzYzAsMC4xMzE4NyAwLDAuMjUyMjcgMCwwLjM4NDEzYzAsMTQuODIwNjcgMTAuNTM3ODcsMjcuMTgxNzMgMjQuNTMyOTMsMjkuOTg1MzNjLTIuNTYyOCwwLjY5OTQ3IC01LjI2ODkzLDEuMDcyMTMgLTguMDYxMDcsMS4wNzIxM2MtMS45NjY1MywwIC0zLjg4NzIsLTAuMTk0OTMgLTUuNzUwNTMsLTAuNTQ0NjdjMy44OTI5MywxMi4xNDg5MyAxNS4xODc2LDIwLjk5NTQ3IDI4LjU2OTIsMjEuMjQyYy0xMC40NjMzMyw4LjIwNDQgLTIzLjY1LDEzLjA5NDkzIC0zNy45ODMzMywxMy4wOTQ5M2MtMi40NjUzMywwIC00LjkwMiwtMC4xNDMzMyAtNy4yOTg1MywtMC40M2MxMy41MzY0LDguNjc0NTMgMjkuNjA2OTMsMTMuNzM3MDcgNDYuODgxNDcsMTMuNzM3MDdjNTYuMjU1NDcsMCA4Ny4wMDkwNywtNDYuNjAwNTMgODcuMDA5MDcsLTg3LjAxNDhjMCwtMS4zMjQ0IC0wLjAyODY3LC0yLjY0MzA3IC0wLjA4NiwtMy45NTZjNS45Nzk4NywtNC4zMTcyIDExLjE2ODUzLC05LjcwMDggMTUuMjY3ODcsLTE1LjgyOTczeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </div>
              <div className="border p-2 rounded-sm">
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU3LjMyMjE0LDE3LjJjLTIyLjEyNDkzLDAgLTQwLjEyMjE0LDE4LjAxMzg2IC00MC4xMjIxNCw0MC4xNDQ1M3Y1Ny4zMzMzM2MwLDIyLjEyNDkzIDE4LjAxMzg2LDQwLjEyMjE0IDQwLjE0NDUzLDQwLjEyMjE0aDU3LjMzMzMzYzIyLjEyNDkzLDAgNDAuMTIyMTQsLTE4LjAxMzg2IDQwLjEyMjE0LC00MC4xNDQ1M3YtNTcuMzMzMzNjMCwtMjIuMTI0OTMgLTE4LjAxMzg2LC00MC4xMjIxNCAtNDAuMTQ0NTMsLTQwLjEyMjE0ek0xMjYuMTMzMzMsNDAuMTMzMzNjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNjLTMuMTY0OCwwIC01LjczMzMzLC0yLjU2ODUzIC01LjczMzMzLC01LjczMzMzYzAsLTMuMTY0OCAyLjU2ODUzLC01LjczMzMzIDUuNzMzMzMsLTUuNzMzMzN6TTg2LDUxLjZjMTguOTcxNiwwIDM0LjQsMTUuNDI4NCAzNC40LDM0LjRjMCwxOC45NzE2IC0xNS40Mjg0LDM0LjQgLTM0LjQsMzQuNGMtMTguOTcxNiwwIC0zNC40LC0xNS40Mjg0IC0zNC40LC0zNC40YzAsLTE4Ljk3MTYgMTUuNDI4NCwtMzQuNCAzNC40LC0zNC40ek04Niw2My4wNjY2N2MtMTIuNjY1NzMsMCAtMjIuOTMzMzMsMTAuMjY3NiAtMjIuOTMzMzMsMjIuOTMzMzNjMCwxMi42NjU3MyAxMC4yNjc2LDIyLjkzMzMzIDIyLjkzMzMzLDIyLjkzMzMzYzEyLjY2NTczLDAgMjIuOTMzMzMsLTEwLjI2NzYgMjIuOTMzMzMsLTIyLjkzMzMzYzAsLTEyLjY2NTczIC0xMC4yNjc2LC0yMi45MzMzMyAtMjIuOTMzMzMsLTIyLjkzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </div>
              <div className="border p-2 rounded-sm">
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEzNy42LDIyLjkzMzMzaC0xMDMuMmMtNi4zMzUzMywwIC0xMS40NjY2Nyw1LjEzMTMzIC0xMS40NjY2NywxMS40NjY2N3YxMDMuMmMwLDYuMzM1MzMgNS4xMzEzMywxMS40NjY2NyAxMS40NjY2NywxMS40NjY2N2gxMDMuMmM2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di0xMDMuMmMwLC02LjMzNTMzIC01LjEzMTMzLC0xMS40NjY2NyAtMTEuNDY2NjcsLTExLjQ2NjY3ek02Mi44MDI5MywxMjYuMTMzMzNoLTE2LjkxMzMzdi01NC40MjA4aDE2LjkxMzMzek01NC4xNzQyNyw2My45MzI0Yy01LjQ1MjQsMCAtOS44NjEzMywtNC40MjA0IC05Ljg2MTMzLC05Ljg2MTMzYzAsLTUuNDQwOTMgNC40MTQ2NywtOS44NTU2IDkuODYxMzMsLTkuODU1NmM1LjQzNTIsMCA5Ljg1NTYsNC40MjA0IDkuODU1Niw5Ljg1NTZjMCw1LjQ0MDkzIC00LjQyMDQsOS44NjEzMyAtOS44NTU2LDkuODYxMzN6TTEyNi4xNTYyNywxMjYuMTMzMzNoLTE2LjkwMTg3di0yNi40NjUwN2MwLC02LjMxMjQgLTAuMTE0NjcsLTE0LjQzMDggLTguNzg5MiwtMTQuNDMwOGMtOC44MDA2NywwIC0xMC4xNTM3Myw2Ljg3NDI3IC0xMC4xNTM3MywxMy45NzIxM3YyNi45MjM3M2gtMTYuOTAxODd2LTU0LjQyMDhoMTYuMjI1MzN2Ny40MzYxM2gwLjIyOTMzYzIuMjU4OTMsLTQuMjc3MDcgNy43NzQ0LC04Ljc4OTIgMTYuMDAxNzMsLTguNzg5MmMxNy4xMjU0NywwIDIwLjI5MDI3LDExLjI3MTczIDIwLjI5MDI3LDI1LjkyNjEzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tph_purple p-6 md:px-12 lg:px-20 xl:px-40 text-white flex items-center justify-center">
        <p className="text-sm font-semibold uppercase">
          copyright &copy; 2021 Thate Pan Hub
        </p>
      </div>
    </div>
  );
};

export default Footer;

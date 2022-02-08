import { useState } from "react";

// components
import Page from "../../components/utils/Page";
import Steps from "../../components/elements/Steps";
import { RegisterAccount, AccountType } from "../../components/loginRegister";
import TPHLogoWithoutText from "../../assets/logos/TPHLogoWithoutText.png";

export default function Register() {
  // states
  const [steps, setSteps] = useState([
    { id: "step-1", name: "Register account", status: "current" },
    { id: "step-2", name: "Choose account type", status: "upcoming" },
  ]);
  const [currentStep, setCurrentStep] = useState("step-1");

  const [formValue, setFormValue] = useState({});

  const createAccount = (accountTypeValues) => {
    let tempFormValue = { ...formValue, ...accountTypeValues };
    setFormValue(tempFormValue);

    console.log(tempFormValue);
    // setFormValue({ ...formValue, accountTypeValues });

    // console.log(formValue);
  };

  const next = (previousStep, nextStep, registerAccountValues) => {
    // setRegisterInputValue
    let tempFormValue = { ...formValue, ...registerAccountValues };
    setFormValue(tempFormValue);

    // go to next step
    setCurrentStep(nextStep);
    let items = [...steps];
    // change previous item status to complete
    let previousItem = items.filter((i) => {
      return i.id === previousStep;
    });
    previousItem[0].status = "complete";
    items[0] = previousItem[0];

    // change next item status to current
    let nextItem = items.filter((i) => {
      return i.id === nextStep;
    });
    nextItem[0].status = "current";
    items[1] = nextItem[0];

    setSteps(items);
  };

  const back = (previousStep) => {
    setCurrentStep(previousStep);
  };

  return (
    <Page title="Register | TPH Dance Party">
      <div className="min-h-full flex">
        <div className="hidden lg:block relative w-3/6 flex-1">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt="login-img"
          />
        </div>
        <div className="h-screen w-3/6 flex-1 flex flex-col py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-lg lg:w-120">
            <img className="h-14 w-auto" src={TPHLogoWithoutText} alt="logo" />

            <div className="mt-2">
              <Steps steps={steps} />
            </div>

            {currentStep === "step-1" ? (
              <RegisterAccount next={next} />
            ) : (
              <AccountType back={back} createAccount={createAccount} />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

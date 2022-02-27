import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux";
import { bindActionCreators } from "redux";

// components
import Page from "../../components/utils/Page";
import Steps from "../../components/elements/Steps";
import { RegisterAccount, AccountType } from "../../components/loginRegister";
import TPHLogoWithoutText from "../../assets/logos/TPHLogoWithoutText.png";

// APIs
import UnAuthAPIs from "../../api/UnAuthAPIs";

export default function Register() {
  // instances
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // states
  const [steps, setSteps] = useState([
    { id: "step-1", name: "Register account", status: "current" },
    { id: "step-2", name: "Choose account type", status: "upcoming" },
  ]);
  const [currentStep, setCurrentStep] = useState("step-1");
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});

  //binding action creator
  const { snackBarOpener } = bindActionCreators(actionCreators, dispatch);

  // functions
  const createAccount = async (accountTypeValues) => {
    let tempFormValue = { ...formValue, ...accountTypeValues };
    setFormValue(tempFormValue);

    const res = await UnAuthAPIs.createNewAccount(tempFormValue);

    if (res.status === 201) {
      snackBarOpener({
        status: "success",
        title: "Success",
        message: "Your account has been created. Please login.",
      }); // dispatch
      navigate("/login");
    } else if (res.status === 422) {
      await setErrors(res.data);
      if (res.data.email) {
        back("step-1");
      }
      // snackBarOpener({ title: "Error", message: "This is error message" }); // dispatch
    }
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
      <div className="flex">
        <div className="hidden lg:block relative w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt="login-img"
          />
        </div>
        <div className="min-h-screen w-1/2 flex-1 flex flex-col py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-lg lg:w-120">
            <img className="h-14 w-auto" src={TPHLogoWithoutText} alt="logo" />

            <div className="mt-2">
              <Steps steps={steps} />
            </div>

            {currentStep === "step-1" ? (
              <RegisterAccount
                formValue={formValue}
                next={next}
                resErrors={errors}
              />
            ) : (
              <AccountType
                formValue={formValue}
                back={back}
                createAccount={createAccount}
                resErrors={errors}
              />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import Page from "../../components/utils/Page";
import { TextField, Button } from "../../components/forms";
import TPHLogoWithoutText from "../../assets/logos/TPHLogoWithoutText.png";

// constants
const URL = process.env.REACT_APP_API_URL;

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(32).required(),
});

export default function Login() {
  // instances
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await fetch(`${URL}oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        grant_type: process.env.REACT_APP_OAUTH_GRANT_TYPE,
        client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
        client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.access_token) {
          dispatch({
            type: "AUTH_SUCCESS",
            payloads: { token: resJson.access_token },
          });
          navigate("/");
        } else if (resJson.error === "invalid_grant") {
          [
            {
              type: "manual",
              name: "email",
              message: resJson.message,
            },
            {
              type: "manual",
              name: "password",
              message: resJson.message,
            },
          ].forEach(({ name, type, message }) =>
            setError(name, { type, message })
          );
        }
      })
      .catch((err) => {
        console.log("error is ", err);
      });
  };

  return (
    <Page title="Login | TPH Dance Party">
      <div className="min-h-full flex">
        <div className="h-screen flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-14 w-auto"
                src={TPHLogoWithoutText}
                alt="logo"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Log in to your account.
              </h2>
              <p className="mt-2 font-medium text-tph_purple text-sm">
                Fill the required information correctly please.
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    register={register("email")}
                    required={true}
                    type={"email"}
                    name={"email"}
                    label={"Email address"}
                    autoComplete={"email"}
                    placeholder={"eg: maungmaung@gmail.com"}
                    errors={errors.email?.message}
                    // value={"sasa@xsphere.co"}
                  />
                  <TextField
                    register={register("password")}
                    required={true}
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    autoComplete={"current-password"}
                    placeholder={"At lest 8 characters"}
                    errors={errors.password?.message}
                    // value={"password"}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <RouterLink
                        to={"/reset-password"}
                        className="font-medium text-tph_orange hover:text-tph_orange_hover hover:underline"
                      >
                        Forgot your password?
                      </RouterLink>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <Button
                      variant={"primary"}
                      type={"submit"}
                      label={"Log in"}
                    />
                  </div>
                  <div className="text-sm">
                    You don't have an account?{" "}
                    <RouterLink
                      to={"/register"}
                      className="font-medium text-tph_orange hover:text-tph_orange_hover hover:underline"
                    >
                      Create account here.
                    </RouterLink>
                  </div>
                </form>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign-up with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="mt-1 flex justify-center gap-4">
                  <div className="group flex items-center justify-center cursor-pointer">
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg
                        className="w-6 h-6 group-hover:hidden"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.46 18H11.39V10.7H13.84L14.21 7.86H11.39V6.04C11.39 5.22 11.62 4.66 12.8 4.66H14.31V2.11C14.05 2.08 13.16 2 12.12 2C9.94 2 8.46 3.33 8.46 5.76V7.86H6V10.7H8.46V18Z"
                          fill="#6B7280"
                        />
                      </svg>
                      <svg
                        className="w-6 h-6 hidden group-hover:block"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.46 18H11.39V10.7H13.84L14.21 7.86H11.39V6.04C11.39 5.22 11.62 4.66 12.8 4.66H14.31V2.11C14.05 2.08 13.16 2 12.12 2C9.94 2 8.46 3.33 8.46 5.76V7.86H6V10.7H8.46V18Z"
                          fill="#3b5998"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="group flex items-center justify-center cursor-pointer">
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg
                        className="w-4 h-4 group-hover:hidden"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4183_28239)">
                          <path
                            d="M4.3882 8.1375C4.77811 6.95787 5.53059 5.93151 6.5383 5.20483C7.54601 4.47815 8.75748 4.08828 9.99987 4.09083C11.4082 4.09083 12.6815 4.59083 13.6815 5.40917L16.5915 2.5C14.8182 0.954167 12.5457 0 9.99987 0C6.0582 0 2.66487 2.24833 1.0332 5.54167L4.3882 8.1375Z"
                            fill="#6B7280"
                          />
                          <path
                            d="M13.3671 15.011C12.4588 15.5968 11.3054 15.9093 10.0004 15.9093C8.76298 15.9118 7.55609 15.5251 6.55061 14.8038C5.54514 14.0825 4.79204 13.0631 4.39792 11.8901L1.03125 14.446C1.85729 16.1179 3.13564 17.5246 4.7211 18.5064C6.30656 19.4882 8.13559 20.0057 10.0004 20.0001C12.4446 20.0001 14.7796 19.131 16.5287 17.5001L13.3679 15.011H13.3671Z"
                            fill="#6B7280"
                          />
                          <path
                            d="M16.5283 17.5C18.3575 15.7933 19.545 13.2533 19.545 9.99997C19.545 9.40831 19.4542 8.77247 19.3183 8.18164H10V12.0458H15.3633C15.0992 13.345 14.3883 14.3508 13.3675 15.0108L16.5283 17.5Z"
                            fill="#6B7280"
                          />
                          <path
                            d="M4.3976 11.8898C4.19373 11.2806 4.09016 10.6423 4.09093 9.99984C4.09093 9.34817 4.1951 8.72234 4.38843 8.13734L1.03343 5.5415C0.347079 6.92708 -0.00673329 8.4536 9.70454e-05 9.99984C9.70454e-05 11.5998 0.37093 13.1082 1.03093 14.4457L4.3976 11.8898Z"
                            fill="#6B7280"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4183_28239">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="w-4 h-4 hidden group-hover:block"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4183_28239)">
                          <path
                            d="M4.3882 8.1375C4.77811 6.95787 5.53059 5.93151 6.5383 5.20483C7.54601 4.47815 8.75748 4.08828 9.99987 4.09083C11.4082 4.09083 12.6815 4.59083 13.6815 5.40917L16.5915 2.5C14.8182 0.954167 12.5457 0 9.99987 0C6.0582 0 2.66487 2.24833 1.0332 5.54167L4.3882 8.1375Z"
                            fill="#EA4335"
                          />
                          <path
                            d="M13.3671 15.011C12.4588 15.5968 11.3054 15.9093 10.0004 15.9093C8.76298 15.9118 7.55609 15.5251 6.55061 14.8038C5.54514 14.0825 4.79204 13.0631 4.39792 11.8901L1.03125 14.446C1.85729 16.1179 3.13564 17.5246 4.7211 18.5064C6.30656 19.4882 8.13559 20.0057 10.0004 20.0001C12.4446 20.0001 14.7796 19.131 16.5287 17.5001L13.3679 15.011H13.3671Z"
                            fill="#34A853"
                          />
                          <path
                            d="M16.5283 17.5C18.3575 15.7933 19.545 13.2533 19.545 9.99997C19.545 9.40831 19.4542 8.77247 19.3183 8.18164H10V12.0458H15.3633C15.0992 13.345 14.3883 14.3508 13.3675 15.0108L16.5283 17.5Z"
                            fill="#4A90E2"
                          />
                          <path
                            d="M4.3976 11.8898C4.19373 11.2806 4.09016 10.6423 4.09093 9.99984C4.09093 9.34817 4.1951 8.72234 4.38843 8.13734L1.03343 5.5415C0.347079 6.92708 -0.00673329 8.4536 9.70454e-05 9.99984C9.70454e-05 11.5998 0.37093 13.1082 1.03093 14.4457L4.3976 11.8898Z"
                            fill="#FBBC05"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4183_28239">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="group flex items-center justify-center cursor-pointer">
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg
                        className="w-6 h-6 group-hover:hidden"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.125 4.9668C17.5273 5.22462 16.8769 5.41016 16.207 5.48243C16.9026 5.06922 17.4234 4.41641 17.6719 3.64649C17.0192 4.03475 16.3042 4.30701 15.5586 4.45118C15.247 4.11803 14.8701 3.85262 14.4514 3.67151C14.0327 3.49039 13.5812 3.39744 13.125 3.39845C11.2793 3.39845 9.79492 4.89454 9.79492 6.73048C9.79492 6.98829 9.82617 7.2461 9.87695 7.49415C7.11328 7.34962 4.64844 6.0293 3.00977 4.00782C2.71118 4.51781 2.55471 5.0985 2.55664 5.68946C2.55664 6.84571 3.14453 7.86524 4.04102 8.46485C3.5127 8.44404 2.99676 8.29883 2.53516 8.04102V8.08204C2.53516 9.70118 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62404 11.464 4.32812 11.4649C4.11133 11.4649 3.90625 11.4434 3.69922 11.4141C4.12109 12.7344 5.34961 13.6934 6.8125 13.7246C5.66797 14.6211 4.23437 15.1484 2.67773 15.1484C2.39844 15.1484 2.14062 15.1387 1.87305 15.1074C3.34961 16.0547 5.10156 16.6016 6.98828 16.6016C13.1133 16.6016 16.4648 11.5274 16.4648 7.12305C16.4648 6.97852 16.4648 6.83399 16.4551 6.68946C17.1035 6.21485 17.6719 5.62696 18.125 4.9668Z"
                          fill="#6B7280"
                        />
                      </svg>
                      <svg
                        className="w-6 h-6 hidden group-hover:block"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.125 4.9668C17.5273 5.22462 16.8769 5.41016 16.207 5.48243C16.9026 5.06922 17.4234 4.41641 17.6719 3.64649C17.0192 4.03475 16.3042 4.30701 15.5586 4.45118C15.247 4.11803 14.8701 3.85262 14.4514 3.67151C14.0327 3.49039 13.5812 3.39744 13.125 3.39845C11.2793 3.39845 9.79492 4.89454 9.79492 6.73048C9.79492 6.98829 9.82617 7.2461 9.87695 7.49415C7.11328 7.34962 4.64844 6.0293 3.00977 4.00782C2.71118 4.51781 2.55471 5.0985 2.55664 5.68946C2.55664 6.84571 3.14453 7.86524 4.04102 8.46485C3.5127 8.44404 2.99676 8.29883 2.53516 8.04102V8.08204C2.53516 9.70118 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62404 11.464 4.32812 11.4649C4.11133 11.4649 3.90625 11.4434 3.69922 11.4141C4.12109 12.7344 5.34961 13.6934 6.8125 13.7246C5.66797 14.6211 4.23437 15.1484 2.67773 15.1484C2.39844 15.1484 2.14062 15.1387 1.87305 15.1074C3.34961 16.0547 5.10156 16.6016 6.98828 16.6016C13.1133 16.6016 16.4648 11.5274 16.4648 7.12305C16.4648 6.97852 16.4648 6.83399 16.4551 6.68946C17.1035 6.21485 17.6719 5.62696 18.125 4.9668Z"
                          fill="#00ACEE"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt="login-img"
          />
        </div>
      </div>
    </Page>
  );
}

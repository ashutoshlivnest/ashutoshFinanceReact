import { useEffect, useRef, useState, useContext } from "react";
import IMAGES from "../images";
import { toast } from "react-toastify";
import { getCoordinates } from "../utils/getCoordinates";
import { getUserPlatform } from "../utils/getUserPlatform";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../utils/setLocalStorage";
import { AppContext } from "../context/AppContext";
import { getLocalStorage } from "../utils/getLocalStorage";
import axiosInstance from "../api/axiosInstance";
const LoginPage = () => {
  // getting the function from context
  const { setActiveUserData } = useContext(AppContext);

  // whatsApp number input state
  const [whatsAppNumber, setWhatsAppNumber] = useState("");

  // OTP success state
  const [otpSuccess, setOtpSuccess] = useState(false);

  // OTP inputs
  const [OTP, setOTP] = useState(Array(6).fill(""));

  // latitude & longitude
  const [coordinates, setCoordinates] = useState(null);

  // userplatform (browser, mobile)
  const [userPlatform, setUserPlatform] = useState(null);

  // ref of individual OTP inputs
  const inputRefs = useRef(Array(6).fill(null));

  const navigate = useNavigate();

  useEffect(() => {
    //setting the coordinates
    (async () => {
      const data = await getCoordinates();
      setCoordinates(data);
    })();

    //setting the userplatform
    setUserPlatform(getUserPlatform());

    try {
      if (getLocalStorage()) {
        window.location.href = "/";
      }
    } catch (error) {}
  }, []);

  // Handle WhatsApp Number Input change
  const handleInputChange = (e) => {
    // Limit the input to a maximum of 10 digits
    if (e.target.value.length <= 10) {
      setWhatsAppNumber(e.target.value);
    }
  };

  //Hanlde Click on the Get OTP Button
  const handleGetOTP = async () => {
    //regex to test if number is in proper format
    const regex = /^[6-9]\d{9}$/;

    //if pass the regex then send OTP
    if (regex.test(whatsAppNumber)) {
      try {
        //send OTP api call
        axiosInstance("/session/otp/" + whatsAppNumber, "GET")
          .then((res) => {
            toast.success(res?.data?.messages[0]);
            setOtpSuccess(true);
          })
          .catch((error) => {
            toast.error(error?.response?.data?.messages[0]);
            console.log("error");
          });
      } catch (error) {
        toast.error("An error occurred while sending OTP.");
      }
    } else {
      toast.error("Invalid Number");
    }
  };

  //handle OTP input change
  const handleOTPInputChange = (event, currentIndex) => {
    let value = event.target.value;

    // Only allow numeric input
    if (!/^[0-9]*$/.test(value)) {
      value = "";
      event.target.value = "";
    } else {
      const newOTP = [...OTP];
      newOTP[currentIndex] = value;
      setOTP(newOTP);

      // Change the focus to the next input
      if (value !== "" && currentIndex < 5) {
        inputRefs.current[currentIndex + 1].focus();
      } else if (value === "" && currentIndex > 0) {
        inputRefs.current[currentIndex].focus();
      }
    }
  };

  // handle keydown event on OTP input for backspace
  const handleKeyDown = (event, currentIndex) => {
    if (
      event.key === "Backspace" &&
      currentIndex > 0 &&
      OTP[currentIndex] === ""
    ) {
      inputRefs.current[currentIndex - 1].focus();
    }
  };

  // hanlde click on login button
  const handleLogin = async () => {
    if ((otpSuccess || whatsAppNumber) && OTP[0] !== "") {
      axiosInstance("/session", "POST", {
        number: whatsAppNumber,
        otp: OTP.join(""),
        platform: userPlatform,
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
      })
        .then((res) => {
          // setting the active user in context
          setActiveUserData({
            user_name: res?.data?.data?.user_name,
            user_id: res?.data?.data?.user_id,
          });

          // setting the local storage
          setLocalStorage(
            res?.data?.data?.access_token,
            res?.data?.data?.access_token_expiry,
            res?.data?.data?.refresh_token,
            res?.data?.data?.refresh_token_expiry,
            res?.data?.data?.session_id
          );
          navigate("/");
        })
        .catch((error) => {
          toast.error(error?.response?.data?.messages[0]);
        });
    } else {
      if (otpSuccess) {
        toast.error("Enter OTP");
      } else {
        toast.error("Enter Number");
      }
    }
  };

  return (
    <section className="bg-white flex h-[99vh] items-center justify-center gap-20 border-[20px] border-[#F2F4F5]  xl:gap-28">
      {/* Left IMG Container */}
      <div>
        <img
          src={IMAGES.Illustration}
          alt="illustration"
          className="h-full w-full"
        />
      </div>

      <div>
        {/* LiveNest Logo */}
        <img
          src={IMAGES.LivnestLogo}
          className="mx-auto h-16 w-56"
          alt="livnest logo"
        />
        <div className="mt-10 w-[450px] rounded-3xl   border border-solid border-[#3063E4] px-11  py-6 text-center  ">
          <span className="text-2xl font-semibold text-[#09001F]">LOGIN</span>
          <p className="mt-5  text-[#292929] ">
            We will send you one-time Password to your WhatsApp number
          </p>

          {/* Phone Number Input Container */}
          <div className="mt-8 flex   rounded-[30px] border border-solid border-[#3063E4] bg-[#F5F5F5] p-[5px]">
            <img src={IMAGES.Call} alt="call" />

            {/* WhatsApp Number Input */}
            <input
              className="w-1/3 flex-1 bg-[#F5F5F5] pl-4 font-medium text-[#414141] outline-none"
              type="number"
              placeholder="WhatsApp No."
              maxLength={10}
              value={whatsAppNumber}
              onChange={handleInputChange}
            />
            <button
              onClick={handleGetOTP}
              className="min-h-full w-32 rounded-[30px] bg-button-gradient text-sm font-semibold text-white outline-none"
            >
              GET OTP
            </button>
          </div>
          {otpSuccess && (
            <p className="mt-4 text-base font-medium text-[#009C10]">
              OTP Sent Successfully
            </p>
          )}

          <div>
            <p className=" mt-5 text-base text-[#292929]">Enter OTP Here</p>

            {/* OTP Container */}
            <div className="mt-6 flex justify-center gap-3">
              {/* OTP Input Boxes */}
              {OTP.map((digit, index) => (
                <input
                  className="h-12 w-10 rounded-md border-2 border-[#3063E4] text-center text-2xl font-semibold text-[#09001F] shadow-md outline-none"
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="mt-8 h-11 w-32 outline-none rounded-xl bg-button-gradient text-xl font-semibold text-white"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

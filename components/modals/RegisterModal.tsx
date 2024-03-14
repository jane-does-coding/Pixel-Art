"use client";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { IoIosInformationCircleOutline } from "react-icons/io";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  /*   const [inputs, setInputs] = useState({
    nickname: "",
    gender: "",
    email: "",
    password: "",
  }); */

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    console.log(email, nickname, gender, password);

    try {
      setIsLoading(true);

      /* ADD LOGIN */

      RegisterModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [RegisterModal, email, nickname, gender, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h2 className="flex gap-2 text-neutral-300 items-center justify-start mb-4">
        <IoIosInformationCircleOutline size={28} color="white" />
        None of your information but you nickname will be displayed
      </h2>
      <div className="flex gap-2">
        <Input
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          disabled={isLoading}
        />

        {/* GENDER SELECT */}
        <select
          name="genders"
          className=" bg-black/[20%] text-white border-black border-2 focus:border-purple-400 px-2 rounded-md outline-none focus:outline-none"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value="female" className="bg-black text-white py-2 my-2">
            Female
          </option>
          <option value="male" className="bg-black text-white py-2">
            Male
          </option>
          <option value="other" className="bg-black text-white py-2">
            Other
          </option>
        </select>
      </div>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionLabel="Sign up"
      onClose={RegisterModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default RegisterModal;

import React, { useState } from "react";
import logo from "../../assets/image/thaunlogo.png";
import { Link } from "react-router-dom";

interface Form {
  [key: string]: string;
}
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [form, setForm] = useState<Form>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubscribe = (e: any) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="bg-primary200 rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} width={70} alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              ThaunBook
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <form className="max-w-lg mx-auto mt-2" onSubmit={handleOnSubscribe}>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-black rounded px-2 w-1/2"
            placeholder="jack@sparrow.com"
            onChange={handleOnChange}
          />
          <button
            className="ml-2 bg-black px-1 rounded text-white "
            type="submit"
          >
            Subscribe
          </button>
        </form>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center ">
          © 2023{" "}
          <Link to="#" className="hover:underline">
            ThaunBook
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;

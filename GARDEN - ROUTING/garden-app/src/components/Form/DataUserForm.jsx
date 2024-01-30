import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../../context/themeContext";
import imgFiveHands from "../../media/formHands.svg";
import styles from "./form.module.css";

function DataUserForm({ addUserToList }) {
  const { theme } = useContext(ThemeContext);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: {} });

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: uuidv4(),
    };

    addUserToList(newUser);
    setIsFormSubmitted(true);
    reset();
  };

  return (
    <div className={theme === "dark" ? styles.divFormDark : styles.divForm}>
      <div className={styles.greenDiv}>
        <h2>5% off on the first order</h2>
        <form onSubmit={handleSubmit(handleAddUser)}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.formHands}
              src={imgFiveHands}
              alt="five hands"
            />
          </div>
          <div className={styles.divInputs}>
            {isFormSubmitted && (
              <p className={styles.pSubmittedRegistration}>
                {isSubmitSuccessful
                  ? "Thank you for your registration!"
                  : "Try please your registration one more time. Thank you!"}
              </p>
            )}
            {!isFormSubmitted && (
              <>
                <p className={styles.formErrorMessage}>
                  {errors.firstName?.message}
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  {...register("firstName", {
                    required: "Please fill the field",
                    minLength: {
                      value: 4,
                      message: "Your name should have more than 4 Letters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Your name should have less than 10 Letters",
                    },
                  })}
                />
                <p className={styles.formErrorMessage}>
                  {errors.phone?.message}
                </p>
                <input
                  type="tel"
                  placeholder="Phone number"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value:
                        /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
                      message: "It is not a german number",
                    },
                  })}
                />
                <p className={styles.formErrorMessage}>
                  {errors.email?.message}
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "It is not a right email",
                    },
                  })}
                />
                <button type="submit" className={styles.whiteButton}>
                  Get a discount
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataUserForm;

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h2 className="text-4xl">안녕하세요</h2>
        <h2 className="text-2xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="User Name"
          required
          error={["username is too short"]}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required
          error={["Email is too short"]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          error={["Password is too short"]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          error={["Confirm Password is wrong"]}
        />
        <FormButton loading={false} text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
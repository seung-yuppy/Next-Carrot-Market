import FormButton from "@/components/form-button";
import FormInput from "@/components/Input";
import HomeButton from "@/components/home-button";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 *:font-medium">
          <h2 className="text-4xl">SMS Log In</h2>
          <h2 className="text-2xl">Verify Your Phone Number</h2>
        </div>
        <HomeButton />
      </div>

      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="Phone Number"
          required
          name="phonenumber"
          error={[]}
        />
        <FormInput
          type="number"
          placeholder="Verification Code"
          required
          name="verificationcode"
          error={[]}
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
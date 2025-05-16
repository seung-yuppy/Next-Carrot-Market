import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h2 className="text-4xl">안녕하세요</h2>
        <h2 className="text-2xl">Log In With Email & Password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="email"
          placeholder="Email"
          required
          error={[]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          error={[]}
        />
        <FormButton loading={false} text="Log In" />
      </form>
    </div>
  );
}
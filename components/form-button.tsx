interface IFormButton {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: IFormButton) {
  return (
    <button
      className="primary-btn py-2.5 
    disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? "Loading..." : text}
    </button>
  )
}
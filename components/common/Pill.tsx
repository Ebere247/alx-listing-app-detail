interface PillProps {
  label: string;
}

const Pill = ({ label }: PillProps) => {
  return (
    <button className="px-4 py-2 rounded-full bg-white border hover:bg-gray-100 shadow-sm text-sm">
      {label}
    </button>
  );
};

export default Pill;

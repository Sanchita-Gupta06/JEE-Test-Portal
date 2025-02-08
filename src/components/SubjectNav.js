export default function SubjectNav({ sections, selectedSection, setSelectedSection, setSelectedQuestion }) {
  return (
    <nav className="flex gap-4 p-4 border-b-2 border-gray-300">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md ${
            selectedSection === index ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
          onClick={() => {
            setSelectedSection(index);
            setSelectedQuestion(0);
          }}
        >
          {section.name.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}

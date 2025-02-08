export default function Question({ questionData, setSelectedQuestion, totalQuestions }) {
  if (!questionData) return <p>Loading question...</p>;

  return (
    <section className="flex-1 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{questionData.questionText}</h3>
        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">02:00</div>
      </div>
      <p>{questionData.description}</p>
      <div className="mt-4 space-y-3">
        {questionData.options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-100"
          >
            <span className="bg-blue-500 text-white font-bold px-3 py-2 rounded-full">
              {String.fromCharCode(65 + index)}
            </span>
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setSelectedQuestion((prev) => Math.max(0, prev - 1))}
        >
          &lt; Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setSelectedQuestion((prev) => Math.min(totalQuestions - 1, prev + 1))}
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
}

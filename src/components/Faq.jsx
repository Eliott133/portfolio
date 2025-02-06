function Faq({ items, className }) {
    return (
      <div className={`space-y-4 ${className}`}>
        {items.map((item, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0} // Le premier élément est ouvert par défaut
            />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Faq;
  
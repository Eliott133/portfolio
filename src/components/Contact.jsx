function Contact({ className }) {
    return (
      <div className={`card glass p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        
        <form action="/contact" method="post">

            <div className="mb-4">
            <label htmlFor="subject" className="label">
                <span className="label-text">Objet</span>
                <span className="badge badge-error ml-2">Obligatoire</span>
            </label>
            <input
                id="subject"
                type="text"
                placeholder="Entrez l'objet de votre message"
                className="input input-bordered w-full"
                required
            />
            </div>
    
            <div className="mb-4">
            <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
                <span className="badge badge-error ml-2">Obligatoire</span>
            </label>
            <textarea
                id="message"
                placeholder="Rédigez votre message ici"
                className="textarea textarea-bordered w-full"
                rows="5"
                required
            ></textarea>
            </div>
    
            <div className="mt-4">
            <button className="btn btn-primary w-full">Envoyer</button>
        </div>

        </form>
      </div>
    );
  }
  
  export default Contact;
  
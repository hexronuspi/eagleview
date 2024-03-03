export default function Map() {
    return (
      <main className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Locate Us</h2>
          <p className="text-justify"> B-34,Third Floor, Gurudev Apartments, Kumar's Polyclinic, Ramakrishna Chemburkar Marg, Beside Hanuman Mandir, Below VNP Monorail Station, Chembur Naka, Mumbai – 400 071</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.791019130763!2d72.8940083159332!3d19.05323938709435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6275a2a2d4b%3A0x905b3d0cedb2a6af!2sDr.%20Mrs%20Nanda%20R%20Kumar%20%7C%20Best%20Gynaecologists%7C%20Abortion%20%7C%20Cervical%20cancer%20screening%20%7C%20Pap%20smear%20%7C%20HPV%20Vaccination%20center!5e0!3m2!1sen!2sin!4v1635598756206!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
    );
  }
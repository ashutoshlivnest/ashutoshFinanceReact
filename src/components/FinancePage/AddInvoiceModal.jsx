import axios from "axios";
import IMAGES from "../../images";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const AddInvoiceModal = ({ clientID, onClose }) => {
  const [company, setCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [type, setType] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceValue, setInvoiceValue] = useState('');
  const [status, setInvoiceStatus] = useState('');

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          'https://aarnainfra.com/ladder/dropdown.php'
        );
        const data = response.data;

        const companyData = [];

        data.forEach((location) => {
          location.developers.forEach((developer) => {
            developer.companies.forEach((company) => {
              companyData.push({
                value: company.company_id,
                label: company.company_name,
              });
            });
          });
        });

        setFilteredOptions(companyData);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);

  const addData = async () => {
    //console.log(bookingID, followUpComment, followUpDate, type);

    if (!company || !invoiceNumber || !invoiceValue || !status) {
      toast.error("Please fill all the value");
      return;
    }
    axios
      .put(`https://aarnainfra.com/ladder/client/invoice.php`, {
        client_id : clientID,
        invoice_value: invoiceValue,
        company_id: company,
        invoice_number: invoiceNumber,
      })
      .then((res) => {
        console.log(res);
        if(res.data.message === 'Data inserted successfully.') {
            toast.success("Invoice Added Successfully");
        }
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-x-hidden pt-20 font-ubuntu outline-none backdrop-brightness-50 focus:outline-none">
      <div className="modal mx-auto max-h-[80vh] min-h-[50vh] w-[560px] z-[100] overflow-y-scroll rounded-xl bg-white pb-4 pl-6 pr-6 outline-none">
        <div className="sticky top-0 z-10 flex items-center justify-between py-5 bg-white h-fit">
          <span className="text-lg font-semibold text-[#9A55FF] underline decoration-[#9A55FF] decoration-solid underline-offset-[12px]">
            Add Invoice
          </span>
          <img
            onClick={() => onClose((prev) => !prev)}
            className="cursor-pointer"
            src={IMAGES.CloseIcon}
            alt="close icon"
          />
        </div>

        {/* FIRST ROW */}
        <div className="flex gap-8 mt-3 ">
          <div className="flex-1">
            <p className="text-[#696969] font-medium text-sm mb-1">Select Company</p>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
              />
              <div className="absolute inset-0 cursor-pointer">
                <select
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-full appearance-none bg-transparent border-none text-[#9A9A9A] text-xs pl-2 outline-none"
                >
                  {filteredOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[#696969] font-medium text-sm mb-1">
              Invoice No
            </p>
            <input
              onChange={(e) => setInvoiceNumber(e.target.value)}
              type="number"
              placeholder="Invoice Number"
              className="border border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex gap-8 mt-3">
          <div className="flex-1">
            <p className="text-[#696969] font-medium text-sm mb-1">
              Invoice Value
            </p>
            <input
              onChange={(e) => setInvoiceValue(e.target.value)}
              type="number"
              placeholder="Invoice Value"
              className="border border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
            />
          </div>

          <div className="flex-1">
              <p className="text-[#696969] font-medium text-sm mb-1">
                Status
              </p>
              <select
                onChange={(e) => setInvoiceStatus(e.target.value)}
                className="border border-[#CFCFCF] rounded w-full text-[#9A9A9A] text-xs pl-2 outline-none h-[30px]"
              >
                <option selected hidden>
                  Select Here
                </option>
                <option value="2">Raised</option>
                <option value="1">Not Raised</option>
              </select>
            </div>


        </div>
        <button
            onClick={addData}
            className="bg-[#9A55FF] text-white text-sm font-semibold h-[30px] rounded px-5 block mx-auto my-6"
          >
            Add
          </button>
     
      </div>
    </div>
  );
};

export { AddInvoiceModal };

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import PDFView from "./PDFView";

export default function Form() {
  const [isData, setData] = useState({
    // section 1
    vendor: "",
    customer: "",
    address: "",
    equipment: "",
    model: "",
    pic: "",
    date: "",
    jobDescription: {
      checkingSurvey: false,
      onCallService: false,
      serviceMaintenance: false, // Add this line
    },
    // section 2
    mainPowerSupply: {
      vac: "",
      condition: false,
    },
    outputPSU: {
      vdc: "",
      condition: false,
    },
    batteryVoltage: { vdc: "", condition: false },
    panelLed: { condition: false },
    ledIndikator: { condition: false },
    functionControlPanel: { condition: false },
    checkLedIndicator: { condition: false },
    noteSection2: "",
    // section 3
    pipeCheck: {
      cleaning: false,
      condition: false,
    },
    samplingPointCheck: {
      cleaning: false,
      condition: false,
    },
    holePointCheck: {
      cleaning: false,
      condition: false,
    },
    noteSection3: "",
    // section 4
    filter: {
      day: "",
      condition: false,
    },
    rawFlow: {
      pipe1: {
        value: "",
        condition: false,
      },
      pipe2: {
        value: "",
        condition: false,
      },
      pipe3: {
        value: "",
        condition: false,
      },
      pipe4: {
        value: "",
        condition: false,
      },
    },
    Flow: {
      pipe1: {
        value: "",
        condition: false,
      },
      pipe2: {
        value: "",
        condition: false,
      },
      pipe3: {
        value: "",
        condition: false,
      },
      pipe4: {
        value: "",
        condition: false,
      },
    },
    alert: {
      value: "",
      condition: false,
    },
    action: {
      value: "",
      condition: false,
    },
    fire1: {
      value: "",
      condition: false,
    },
    fire2: {
      value: "",
      condition: false,
    },
    freeAlarm: {
      value: "",
      condition: false,
    },
    noteSection4: "",
    // section 5
    noteSection5: "",
    // section 6
    namaPt: "",
  });
  const [showPDFView, setShowPDFView] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Split the name into nested properties
    const propertyPath = name.split(".");

    // Update state with nested properties
    setData((prevData) => {
      // Clone the previous state
      const newData = { ...prevData };

      // Traverse the property path and update the state
      let currentObj = newData;
      for (let i = 0; i < propertyPath.length - 1; i++) {
        if (!currentObj[propertyPath[i]]) {
          // Initialize the nested property if not exists
          currentObj[propertyPath[i]] = {};
        }
        currentObj = currentObj[propertyPath[i]];
      }

      // Update the last property
      if (type === "checkbox") {
        currentObj[propertyPath.slice(-1)[0]] = checked;
      } else {
        currentObj[propertyPath.slice(-1)[0]] = value;
      }

      return newData;
    });
  };

  const technicalSignature = useRef(null);
  const customerSignature = useRef(null);

  const handleGeneratePDF = () => {
    setShowPDFView(true);
  };

  // State variables for signature images
  const [technicalSignatureImage, setTechnicalSignatureImage] = useState(null);
  const [customerSignatureImage, setCustomerSignatureImage] = useState(null);

  const handleTechnicalSignatureSave = () => {
    const signatureImage = technicalSignature.current.toDataURL();
    console.log("Technical Signature:", signatureImage);
    // You can save or use the technical signature image as needed
    // Save the technical signature image to state
    setTechnicalSignatureImage(signatureImage);
  };

  const handleCustomerSignatureSave = () => {
    const signatureImage = customerSignature.current.toDataURL();
    console.log("Customer Signature:", signatureImage);
    // You can save or use the customer signature image as needed
    // Save the customer signature image to state
    setCustomerSignatureImage(signatureImage);
  };

  const handleEraseTechnicalSignature = () => {
    technicalSignature.current.clear();
  };

  const handleEraseCustomerSignature = () => {
    customerSignature.current.clear();
  };

  return (
    <>
      <div className='md:container mx-3 md:mx-auto'>
        {/* Section 1 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 1</h2>

          <div className='flex flex-col space-y-4'>
            {/* Vendor */}
            <div>
              <label htmlFor='vendor' className='block font-bold mb-2'>
                Vendor:
              </label>
              <input
                type='text'
                id='vendor'
                name='vendor'
                value={isData.vendor}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Customer */}
            <div>
              <label htmlFor='customer' className='block font-bold mb-2'>
                Customer:
              </label>
              <input
                type='text'
                id='customer'
                name='customer'
                value={isData.customer}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Address */}
            <div>
              <label htmlFor='address' className='block font-bold mb-2'>
                Address:
              </label>
              <input
                type='text'
                id='address'
                name='address'
                value={isData.address}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Equipment */}
            <div>
              <label htmlFor='equipment' className='block font-bold mb-2'>
                Equipment:
              </label>
              <input
                type='text'
                id='equipment'
                name='equipment'
                value={isData.equipment}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Model */}
            <div>
              <label htmlFor='model' className='block font-bold mb-2'>
                Model:
              </label>
              <input
                type='text'
                id='model'
                name='model'
                value={isData.model}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* PIC */}
            <div>
              <label htmlFor='pic' className='block font-bold mb-2'>
                Person in Charge (PIC):
              </label>
              <input
                type='text'
                id='pic'
                name='pic'
                value={isData.pic}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Date */}
            <div>
              <label htmlFor='date' className='block font-bold mb-2'>
                Date:
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={isData.date}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Checking Survey */}
            <div>
              <label htmlFor='checkingSurvey' className='block font-bold mb-2'>
                Job Description - Checking Survey:
              </label>
              <input
                type='checkbox'
                id='checkingSurvey'
                name='jobDescription.checkingSurvey'
                onChange={handleChange}
                checked={isData.jobDescription.checkingSurvey}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Checking Survey</span>
            </div>
            {/* On Call Service */}
            <div>
              <label htmlFor='onCallService' className='block font-bold mb-2'>
                Job Description - On Call Service:
              </label>
              <input
                type='checkbox'
                id='onCallService'
                name='jobDescription.onCallService'
                onChange={handleChange}
                checked={isData.jobDescription.onCallService}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>On Call Service</span>
            </div>
            {/* Service Maintenance */}
            <div>
              <label
                htmlFor='serviceMaintenance'
                className='block font-bold mb-2'>
                Job Description - Service Maintenance:
              </label>
              <input
                type='checkbox'
                id='serviceMaintenance'
                name='jobDescription.serviceMaintenance'
                checked={isData.jobDescription.serviceMaintenance}
                onChange={handleChange}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Service Maintenance</span>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 2</h2>
          <div className='flex flex-col space-y-4'>
            {/* Main Power Supply */}
            <div>
              <label
                htmlFor='mainPowerSupply.vac'
                className='block font-bold mb-2'>
                Main Power Supply - VAC:
              </label>
              <input
                type='text'
                id='mainPowerSupply.vac'
                name='mainPowerSupply.vac'
                value={isData.mainPowerSupply.vac}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='mainPowerSupply.condition'
                className='block font-bold mb-2'>
                Main Power Supply - Condition:
              </label>
              <input
                type='checkbox'
                id='mainPowerSupply.condition'
                name='mainPowerSupply.condition'
                onChange={handleChange}
                checked={isData.mainPowerSupply.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Output PSU */}
            <div>
              <label htmlFor='outputPSU.vdc' className='block font-bold mb-2'>
                Output PSU - VDC:
              </label>
              <input
                type='text'
                id='outputPSU.vdc'
                name='outputPSU.vdc'
                value={isData.outputPSU.vdc}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='outputPSU.condition'
                className='block font-bold mb-2'>
                Output PSU - Condition:
              </label>
              <input
                type='checkbox'
                id='outputPSU.condition'
                name='outputPSU.condition'
                onChange={handleChange}
                checked={isData.outputPSU.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Battery Voltage */}
            <div>
              <label
                htmlFor='batteryVoltage.vdc'
                className='block font-bold mb-2'>
                Battery Voltage - VDC:
              </label>
              <input
                type='text'
                id='batteryVoltage.vdc'
                name='batteryVoltage.vdc'
                value={isData.batteryVoltage.vdc}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='batteryVoltage.condition'
                className='block font-bold mb-2'>
                Battery Voltage - Condition:
              </label>
              <input
                type='checkbox'
                id='batteryVoltage.condition'
                name='batteryVoltage.condition'
                onChange={handleChange}
                checked={isData.batteryVoltage.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Panel Led */}
            <div>
              <label
                htmlFor='panelLed.condition'
                className='block font-bold mb-2'>
                Panel Led - Condition:
              </label>
              <input
                type='checkbox'
                id='panelLed.condition'
                name='panelLed.condition'
                onChange={handleChange}
                checked={isData.panelLed.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Led Indikator */}
            <div>
              <label
                htmlFor='ledIndikator.condition'
                className='block font-bold mb-2'>
                Led Indikator - Condition:
              </label>
              <input
                type='checkbox'
                id='ledIndikator.condition'
                name='ledIndikator.condition'
                onChange={handleChange}
                checked={isData.ledIndikator.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Function Control Panel */}
            <div>
              <label
                htmlFor='functionControlPanel.condition'
                className='block font-bold mb-2'>
                Function Control Panel - Condition:
              </label>
              <input
                type='checkbox'
                id='functionControlPanel.condition'
                name='functionControlPanel.condition'
                onChange={handleChange}
                checked={isData.functionControlPanel.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Check Led Indicator */}
            <div>
              <label
                htmlFor='checkLedIndicator.condition'
                className='block font-bold mb-2'>
                Check Led Indicator - Condition:
              </label>
              <input
                type='checkbox'
                id='checkLedIndicator.condition'
                name='checkLedIndicator.condition'
                onChange={handleChange}
                checked={isData.checkLedIndicator.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition</span>
            </div>
            {/* Notes */}
            <div>
              <label htmlFor='noteSection2' className='block font-bold mb-2'>
                Notes:
              </label>
              <textarea
                id='noteSection2'
                name='noteSection2'
                value={isData.noteSection2}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'></textarea>
            </div>
          </div>
        </section>
        {/* Section 3 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 3</h2>
          <div className='flex flex-col space-y-4'>
            {/* Pipecheck */}
            <div className='flex items-center'>
              <div className='mr-4 font-bold'>Pipecheck</div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='pipeCheck.cleaning'
                  name='pipeCheck.cleaning'
                  onChange={handleChange}
                  checked={isData.pipeCheck.cleaning}
                  className='mr-2'
                />
                <label htmlFor='pipeCheck.cleaning' className=' mr-4'>
                  Cleaning
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='pipeCheck.condition'
                  name='pipeCheck.condition'
                  onChange={handleChange}
                  checked={isData.pipeCheck.condition}
                  className='mr-2'
                />
                <label htmlFor='pipeCheck.condition'>Condition Ok</label>
              </div>
            </div>
            {/* Sampling Point Check */}
            <div className='flex items-center'>
              <div className='mr-4 font-bold'>Sampling Point Check</div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='samplingPointCheck.cleaning'
                  name='samplingPointCheck.cleaning'
                  onChange={handleChange}
                  checked={isData.samplingPointCheck.cleaning}
                  className='mr-2'
                />
                <label htmlFor='samplingPointCheck.cleaning' className=' mr-4'>
                  Cleaning
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='samplingPointCheck.condition'
                  name='samplingPointCheck.condition'
                  onChange={handleChange}
                  checked={isData.samplingPointCheck.condition}
                  className='mr-2'
                />
                <label htmlFor='samplingPointCheck.condition'>
                  Condition Ok
                </label>
              </div>
            </div>
            {/* Hole Point Check */}
            <div className='flex items-center'>
              <div className='mr-4 font-bold'>Hole Point Check</div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='holePointCheck.cleaning'
                  name='holePointCheck.cleaning'
                  onChange={handleChange}
                  checked={isData.holePointCheck.cleaning}
                  className='mr-2'
                />
                <label htmlFor='holePointCheck.cleaning' className=' mr-4'>
                  Cleaning
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='holePointCheck.condition'
                  name='holePointCheck.condition'
                  onChange={handleChange}
                  checked={isData.holePointCheck.condition}
                  className='mr-2'
                />
                <label htmlFor='holePointCheck.condition'>Condition Ok</label>
              </div>
            </div>
            {/* Notes */}
            <div>
              <label htmlFor='noteSection3' className='block font-bold mb-2'>
                Notes:
              </label>
              <textarea
                id='noteSection3'
                name='noteSection3'
                value={isData.noteSection3}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'></textarea>
            </div>
          </div>
        </section>
        {/* Section 4 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 4</h2>
          <div className='flex flex-col space-y-4'>
            {/* Filter */}
            <div>
              <label htmlFor='filter.day' className='block font-bold mb-2'>
                Filter Day:
              </label>
              <input
                type='text'
                id='filter.day'
                name='filter.day'
                value={isData.filter.day}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='filter.condition'
                className='block font-bold mb-2'>
                Filter - Condition:
              </label>
              <input
                type='checkbox'
                id='filter.condition'
                name='filter.condition'
                onChange={handleChange}
                checked={isData.filter.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Raw Flow Pipe 1*/}
            <div>
              <label
                htmlFor='rawFlow.pipe1.value'
                className='block font-bold mb-2'>
                Raw Flow Pipe 1:
              </label>
              <input
                type='text'
                id='rawFlow.pipe1.value'
                name='rawFlow.pipe1.value'
                value={isData.rawFlow.pipe1.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='rawFlow.pipe1.condition'
                className='block font-bold mb-2'>
                Raw Flow Pipe 1 - Condition:
              </label>
              <input
                type='checkbox'
                id='rawFlow.pipe1.condition'
                name='rawFlow.pipe1.condition'
                onChange={handleChange}
                checked={isData.rawFlow.pipe1.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Raw Flow Pipe 2*/}
            <div>
              <label
                htmlFor='rawFlow.pipe2.value'
                className='block font-bold mb-2'>
                Raw Flow Pipe 2:
              </label>
              <input
                type='text'
                id='rawFlow.pipe2.value'
                name='rawFlow.pipe2.value'
                value={isData.rawFlow.pipe2.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='rawFlow.pipe2.condition'
                className='block font-bold mb-2'>
                Raw Flow Pipe 2 - Condition:
              </label>
              <input
                type='checkbox'
                id='rawFlow.pipe2.condition'
                name='rawFlow.pipe2.condition'
                onChange={handleChange}
                checked={isData.rawFlow.pipe2.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Raw Flow Pipe 3*/}
            <div>
              <label
                htmlFor='rawFlow.pipe3.value'
                className='block font-bold mb-2'>
                Raw Flow Pipe 3:
              </label>
              <input
                type='text'
                id='rawFlow.pipe3.value'
                name='rawFlow.pipe3.value'
                value={isData.rawFlow.pipe3.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='rawFlow.pipe3.condition'
                className='block font-bold mb-2'>
                Raw Flow Pipe 3 - Condition:
              </label>
              <input
                type='checkbox'
                id='rawFlow.pipe3.condition'
                name='rawFlow.pipe3.condition'
                onChange={handleChange}
                checked={isData.rawFlow.pipe3.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Raw Flow Pipe 4*/}
            <div>
              <label
                htmlFor='rawFlow.pipe4.value'
                className='block font-bold mb-2'>
                Raw Flow Pipe 4:
              </label>
              <input
                type='text'
                id='rawFlow.pipe4.value'
                name='rawFlow.pipe4.value'
                value={isData.rawFlow.pipe4.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='rawFlow.pipe4.condition'
                className='block font-bold mb-2'>
                Raw Flow Pipe 4 - Condition:
              </label>
              <input
                type='checkbox'
                id='rawFlow.pipe4.condition'
                name='rawFlow.pipe4.condition'
                onChange={handleChange}
                checked={isData.rawFlow.pipe4.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Raw Flow Pipe 1*/}
            <div>
              <label
                htmlFor='Flow.pipe1.value'
                className='block font-bold mb-2'>
                Flow Pipe 1:
              </label>
              <input
                type='text'
                id='Flow.pipe1.value'
                name='Flow.pipe1.value'
                value={isData.Flow.pipe1.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='Flow.pipe1.condition'
                className='block font-bold mb-2'>
                Flow Pipe 1 - Condition:
              </label>
              <input
                type='checkbox'
                id='Flow.pipe1.condition'
                name='Flow.pipe1.condition'
                onChange={handleChange}
                checked={isData.Flow.pipe1.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Flow Pipe 2*/}
            <div>
              <label
                htmlFor='Flow.pipe2.value'
                className='block font-bold mb-2'>
                Flow Pipe 2:
              </label>
              <input
                type='text'
                id='Flow.pipe2.value'
                name='Flow.pipe2.value'
                value={isData.Flow.pipe2.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='Flow.pipe2.condition'
                className='block font-bold mb-2'>
                Flow Pipe 2 - Condition:
              </label>
              <input
                type='checkbox'
                id='Flow.pipe2.condition'
                name='Flow.pipe2.condition'
                onChange={handleChange}
                checked={isData.Flow.pipe2.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Flow Pipe 3*/}
            <div>
              <label
                htmlFor='Flow.pipe3.value'
                className='block font-bold mb-2'>
                Flow Pipe 3:
              </label>
              <input
                type='text'
                id='Flow.pipe3.value'
                name='Flow.pipe3.value'
                value={isData.Flow.pipe3.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='Flow.pipe3.condition'
                className='block font-bold mb-2'>
                Flow Pipe 3 - Condition:
              </label>
              <input
                type='checkbox'
                id='Flow.pipe3.condition'
                name='Flow.pipe3.condition'
                onChange={handleChange}
                checked={isData.Flow.pipe3.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Flow Pipe 4*/}
            <div>
              <label
                htmlFor='Flow.pipe4.value'
                className='block font-bold mb-2'>
                Flow Pipe 4:
              </label>
              <input
                type='text'
                id='Flow.pipe4.value'
                name='Flow.pipe4.value'
                value={isData.Flow.pipe4.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='Flow.pipe4.condition'
                className='block font-bold mb-2'>
                Flow Pipe 4 - Condition:
              </label>
              <input
                type='checkbox'
                id='Flow.pipe4.condition'
                name='Flow.pipe4.condition'
                onChange={handleChange}
                checked={isData.Flow.pipe4.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Alert */}
            <div>
              <label htmlFor='alert.value' className='block font-bold mb-2'>
                Alert %:
              </label>
              <input
                placeholder='%'
                type='text'
                id='alert.value'
                name='alert.value'
                value={isData.alert.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label htmlFor='alert.condition' className='block font-bold mb-2'>
                Alert - Condition:
              </label>
              <input
                type='checkbox'
                id='alert.condition'
                name='alert.condition'
                onChange={handleChange}
                checked={isData.alert.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Action */}
            <div>
              <label htmlFor='action.value' className='block font-bold mb-2'>
                Alert %:
              </label>
              <input
                placeholder='%'
                type='text'
                id='action.value'
                name='action.value'
                value={isData.action.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='action.condition'
                className='block font-bold mb-2'>
                Alert - Condition:
              </label>
              <input
                type='checkbox'
                id='action.condition'
                name='action.condition'
                onChange={handleChange}
                checked={isData.action.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Fire 1 */}
            <div>
              <label htmlFor='fire1.value' className='block font-bold mb-2'>
                Fire 1 %:
              </label>
              <input
                placeholder='%'
                type='text'
                id='fire1.value'
                name='fire1.value'
                value={isData.fire1.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label htmlFor='fire1.condition' className='block font-bold mb-2'>
                Fire 1 - Condition:
              </label>
              <input
                type='checkbox'
                id='fire1.condition'
                name='fire1.condition'
                onChange={handleChange}
                checked={isData.fire1.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Fire 2 */}
            <div>
              <label htmlFor='fire2.value' className='block font-bold mb-2'>
                Fire 2 %:
              </label>
              <input
                placeholder='%'
                type='text'
                id='fire2.value'
                name='fire2.value'
                value={isData.fire2.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label htmlFor='fire2.condition' className='block font-bold mb-2'>
                Fire 2 - Condition:
              </label>
              <input
                type='checkbox'
                id='fire2.condition'
                name='fire2.condition'
                onChange={handleChange}
                checked={isData.fire2.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/*  Free Alarm */}
            <div>
              <label htmlFor='freeAlarm.value' className='block font-bold mb-2'>
                Free Alarm %:
              </label>
              <input
                placeholder='%'
                type='text'
                id='freeAlarm.value'
                name='freeAlarm.value'
                value={isData.freeAlarm.value}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            <div>
              <label
                htmlFor='freeAlarm.condition'
                className='block font-bold mb-2'>
                Free Alarm - Condition:
              </label>
              <input
                type='checkbox'
                id='freeAlarm.condition'
                name='freeAlarm.condition'
                onChange={handleChange}
                checked={isData.freeAlarm.condition}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Condition Ok</span>
            </div>
            {/* Notes */}
            <div>
              <label htmlFor='noteSection4' className='block font-bold mb-2'>
                Notes:
              </label>
              <textarea
                id='noteSection4'
                name='noteSection4'
                value={isData.noteSection4}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'></textarea>
            </div>
          </div>
        </section>
        {/* Section 5 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 5</h2>
          <div className='flex flex-col space-y-4'>
            {/* Notes */}
            <div>
              <label htmlFor='noteSection5' className='block font-bold mb-2'>
                Notes:
              </label>
              <textarea
                id='noteSection5'
                name='noteSection5'
                value={isData.noteSection5}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'></textarea>
            </div>
          </div>
        </section>
        {/* Section 6 */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Section 6</h2>
          <div className='flex flex-col space-y-4'>
            {/* Name PT */}
            <div>
              <label htmlFor='namaPt' className='block font-bold mb-2'>
                Name PT:
              </label>
              <input
                type='text'
                id='namaPt'
                name='namaPt'
                value={isData.namaPt}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded px-3 py-2'
              />
            </div>
            {/* Technical Signature */}
            <div>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "auto",
                  boxSizing: "border-box", // Add box-sizing property
                }}>
                <label>Technical Signature:</label>
                <SignatureCanvas
                  ref={technicalSignature}
                  canvasProps={{
                    style: {
                      width: "100%",
                      height: "200px",
                    },
                    className: "signature-canvas",
                  }}
                />
              </div>
              <div className='mt-4 text-center'>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                  onClick={handleTechnicalSignatureSave}>
                  Save Technical Signature
                </button>
                <button
                  className='bg-red-500 text-white px-4 py-2 rounded'
                  onClick={handleEraseTechnicalSignature}>
                  Erase
                </button>
              </div>
            </div>
            {/* Customer Signature */}
            <div>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "auto",
                  boxSizing: "border-box",
                }}>
                <label>Customer Signature:</label>
                <SignatureCanvas
                  ref={customerSignature}
                  canvasProps={{
                    style: {
                      width: "100%",
                      height: "200px",
                    },
                    className: "signature-canvas",
                  }}
                />
              </div>
              <div className='mt-4 text-center'>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                  onClick={handleCustomerSignatureSave}>
                  Save Customer Signature
                </button>
                <button
                  className='bg-red-500 text-white px-4 py-2 rounded'
                  onClick={handleEraseCustomerSignature}>
                  Erase
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* PDF Generator */}
        <section>
          <button
            onClick={handleGeneratePDF}
            className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
            Generate PDF
          </button>
        </section>
        <div className='mt-20'>
          {showPDFView && (
            <PDFView
              data={isData}
              technical={technicalSignatureImage}
              customer={customerSignatureImage}
            />
          )}
        </div>
      </div>
    </>
  );
}

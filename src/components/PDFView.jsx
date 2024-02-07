import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import OpenSansMedium from "../assets/OpenSans-Medium.ttf"; // Corrected extension to .ttf
import OpenSansBold from "../assets/OpenSans-Bold.ttf"; // Corrected extension to .ttf

Font.register({
  family: "OpenSansMedium",
  format: "truetype",
  src: OpenSansMedium,
});

Font.register({
  family: "OpenSansBold",
  format: "truetype",
  src: OpenSansBold,
});

// Create styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    border: "1px solid #000",
  },
  h1: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    paddingVertical: 5,
    fontFamily: "OpenSansBold",
  },
  h2: {
    fontSize: 9,
    textAlign: "center",
    textTransform: "uppercase",
    paddingVertical: 2,
    fontFamily: "OpenSansBold",
    borderBottom: "1px solid #000",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 8,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    fontSize: 8,
    borderBottom: "1px solid #000",
    padding: 2,
  },
  label2: {
    fontSize: 8,
    padding: 2,
  },
  checklist: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 3,
  },
  checklistBox: {
    width: 8,
    height: 8,
    border: "1px solid #000",
  },
  xBox: {
    width: "8px",
    height: "8px",
    border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "8px",
    fontWeight: "bold",
  },

  checklistLabel: {
    fontSize: 8,
  },
  printButton: {
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    marginLeft: 10,
  },
});

const MyDocument = ({ data, technical, customer }) => (
  <Document>
    <Page size='A4'>
      <View style={styles.container}>
        <Text style={{ ...styles.h1, borderBottom: "1px solid #000" }}>
          Maintenance Visit From Vesda
        </Text>
        {/* section 1 */}
        <View style={styles.row}>
          <View style={{ flex: 1, borderRight: "1px solid #000" }}>
            <Text style={styles.label}>Vendor : {data.vendor}</Text>
            <Text style={styles.label}>Customer : {data.customer}</Text>
            <Text style={styles.label}>Address : {data.address}</Text>
            <Text style={styles.label}>Equipment : {data.equipment}</Text>
            <Text style={styles.label}>Model : {data.model}</Text>
            <Text style={styles.label}>PIC : {data.pic}</Text>
          </View>
          <View style={{ flex: 1, borderBottom: "1px solid #000" }}>
            <Text style={styles.label}>Date : {data.date}</Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #FFF" }}>
              Job Description :
            </Text>
            <View style={styles.row}>
              <View style={{ flex: 0.1, marginLeft: 4 }}>
                <Text
                  style={{
                    width: 15,
                    marginTop: 2,
                    fontSize: 8,
                    textAlign: "center",
                    border: "1px solid #000",
                  }}>
                  {data.jobDescription.checkingSurvey ? "X" : " "}
                </Text>
                <Text
                  style={{
                    width: 15,
                    marginTop: 2,
                    fontSize: 8,
                    textAlign: "center",
                    border: "1px solid #000",
                  }}>
                  {data.jobDescription.onCallService ? "X" : " "}
                </Text>
                <Text
                  style={{
                    width: 15,
                    marginTop: 2,
                    fontSize: 8,
                    textAlign: "center",
                    border: "1px solid #000",
                  }}>
                  {data.jobDescription.serviceMaintenance ? "X" : " "}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 8,
                    textAlign: "left",
                  }}>
                  Checking/Survey
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    textAlign: "left",
                    fontSize: 8,
                  }}>
                  On Call Services
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    textAlign: "left",
                    fontSize: 8,
                  }}>
                  On Service Maintenance
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* section 2 */}
        <View style={styles.row}>
          <View
            style={{
              flex: 1.5,
              borderBottom: "1px solid #000",
            }}>
            <Text style={styles.h2}>Description Control Panel</Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              1. Main Power Supply
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              2. Output VDC at PSU Termal
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              3. Battery Voltage
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              4. Panel LED TEST
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              LED Indikator Menu
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              5. Function/Working Test Of Button On The Control Panel
            </Text>
            <Text style={{ ...styles.label, borderBottom: "0px solid #fff" }}>
              6. Check LED Indicator ON (Power On) and LCD Display{" "}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #000",
              borderBottom: "1px solid #000",
            }}>
            <Text
              style={{
                ...styles.h2,
                borderLeft: "1px solid #000",
              }}>
              Result
            </Text>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    ...styles.label,
                    textAlign: "right",
                    borderLeft: "1px solid #000",
                  }}>
                  {data.mainPowerSupply.vac} VAC
                </Text>
                <Text
                  style={{
                    ...styles.label,
                    textAlign: "right",
                    borderLeft: "1px solid #000",
                  }}>
                  {data.outputPSU.vdc} VDC
                </Text>
                <Text
                  style={{
                    ...styles.label,
                    textAlign: "right",
                    borderLeft: "1px solid #000",
                  }}>
                  {data.batteryVoltage.vdc} VDC
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                {[
                  data.mainPowerSupply.condition,
                  data.outputPSU.condition,
                  data.batteryVoltage.condition,
                  data.panelLed.condition,
                  data.ledIndikator.condition,
                  data.functionControlPanel.condition,
                  data.checkLedIndicator.condition,
                ].map((e, index) => (
                  <React.Fragment key={index}>
                    <Text
                      style={{
                        ...styles.label,
                        borderBottom:
                          index ===
                          [
                            data.mainPowerSupply.condition,
                            data.outputPSU.condition,
                            data.batteryVoltage.condition,
                            data.panelLed.condition,
                            data.ledIndikator.condition,
                            data.functionControlPanel.condition,
                            data.checkLedIndicator.condition,
                          ].length -
                            1
                            ? "0px solid #FFF"
                            : "1px solid #000",
                        borderLeft: "1px solid #000",
                        textAlign: "center",
                      }}>
                      {e ? "OK" : "NO"}
                    </Text>
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>
          <View style={{ flex: 1, borderBottom: "1px solid #000" }}>
            <Text style={styles.h2}>Note</Text>
            <Text style={{ fontSize: 8, padding: 5 }}>{data.noteSection2}</Text>
          </View>
        </View>
        {/* section 3 */}
        <View style={styles.row}>
          <View
            style={{
              flex: 1.5,
              borderBottom: "1px solid #000",
            }}>
            <Text style={styles.h2}>Description Hardware PIPE</Text>
            <Text style={styles.label2}>1. Main Power Supply</Text>
            <Text style={styles.label2}>2. Output VDC at PSU Termal</Text>
            <Text style={styles.label2}>3. Battery Voltage</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #000",
              borderBottom: "1px solid #000",
            }}>
            <Text style={{ ...styles.h2, borderLeft: "1px solid #000" }}>
              Result
            </Text>
            <View style={styles.row}>
              <View style={{ flex: 0.2, borderRight: "1px solid #000" }}>
                {[
                  data.pipeCheck.cleaning,
                  data.samplingPointCheck.cleaning,
                  data.holePointCheck.cleaning,
                ].map((e, index) => (
                  <React.Fragment key={index}>
                    <Text
                      style={{
                        borderBottom:
                          index ===
                          [
                            data.pipeCheck.cleaning,
                            data.samplingPointCheck.cleaning,
                            data.holePointCheck.cleaning,
                          ].length -
                            1
                            ? "0px solid #FFF"
                            : "1px solid #000",
                        borderLeft: "1px solid #000",
                        padding: 2,
                        flex: 1,
                        fontSize: 8,
                        textAlign: "center",
                      }}>
                      {e ? "X" : " "}
                    </Text>
                  </React.Fragment>
                ))}
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 8,
                    padding: 2,
                    textAlign: "center",
                    borderBottom: "1px solid #000",
                  }}>
                  Cleaning
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    padding: 2,
                    textAlign: "center",
                    borderBottom: "1px solid #000",
                  }}>
                  Cleaning
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    padding: 2,
                    textAlign: "center",
                  }}>
                  Cleaning
                </Text>
              </View>
              <View style={{ flex: 0.5 }}>
                {[
                  data.pipeCheck.condition,
                  data.samplingPointCheck.condition,
                  data.holePointCheck.condition,
                ].map((e, index) => (
                  <React.Fragment key={index}>
                    <Text
                      style={{
                        fontSize: 8,
                        padding: 2,
                        textAlign: "center",
                        borderBottom:
                          index ===
                          [
                            data.pipeCheck.condition,
                            data.samplingPointCheck.condition,
                            data.holePointCheck.condition,
                          ].length -
                            1
                            ? "0px solid #FFF"
                            : "1px solid #000",
                        borderLeft: "1px solid #000",
                      }}>
                      {e ? "OK" : "NO"}
                    </Text>
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>
          <View style={{ flex: 1, borderBottom: "1px solid #000" }}>
            <Text style={styles.h2}>Note</Text>
            <Text style={{ fontSize: 8, padding: 5 }}>{data.noteSection2}</Text>
          </View>
        </View>
        {/* section 4 */}
        <View style={styles.row}>
          <View
            style={{
              flex: 1.5,
              borderBottom: "1px solid #000",
            }}>
            <Text style={styles.h2}>Description Software</Text>
            <Text style={styles.label2}>1. Filter</Text>
            <Text style={styles.label2}>2. Raw Flow</Text>

            {/* Add empty space until Pipe 4 */}
            <View style={{ height: 45 }}></View>

            <Text style={styles.label2}>3. Flow</Text>

            {/* Add empty space until Pipe 4 */}
            <View style={{ height: 45 }}></View>

            <Text style={styles.label2}>4. Alert</Text>
            <Text style={styles.label2}>5. Action</Text>
            <Text style={styles.label2}>6. Fire 1</Text>
            <Text style={styles.label2}>7. Fire 2</Text>
            <Text style={styles.label2}>8. Free Alarm</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #000",
            }}>
            <Text style={{ ...styles.h2, borderLeft: "1px solid #000" }}>
              Result
            </Text>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                {[
                  data.filter.day + " " + "day",
                  data.rawFlow.pipe1.value + " " + "pipe1",
                  data.rawFlow.pipe2.value + " " + "pipe2",
                  data.rawFlow.pipe3.value + " " + "pipe3",
                  data.rawFlow.pipe4.value + " " + "pipe4",
                  data.Flow.pipe1.value + " " + "pipe1",
                  data.Flow.pipe2.value + " " + "pipe2",
                  data.Flow.pipe3.value + " " + "pipe3",
                  data.Flow.pipe4.value + " " + "pipe4",
                  data.alert.value + " " + "%",
                  data.action.value + " " + "%",
                  data.fire1.value + " " + "%",
                  data.fire2.value + " " + "%",
                  data.freeAlarm.value + " " + "%",
                ].map((e, index) => (
                  <React.Fragment key={index}>
                    <Text
                      style={{
                        fontSize: 8,
                        textAlign: "right",
                        padding: 2,
                        borderBottom: "1px solid #000",
                        borderLeft: "1px solid #000",
                      }}>
                      {e}
                    </Text>
                  </React.Fragment>
                ))}
              </View>
              <View style={{ flex: 1 }}>
                {[
                  data.filter.condition,
                  data.rawFlow.pipe1.condition,
                  data.rawFlow.pipe2.condition,
                  data.rawFlow.pipe3.condition,
                  data.rawFlow.pipe4.condition,
                  data.Flow.pipe1.condition,
                  data.Flow.pipe2.condition,
                  data.Flow.pipe3.condition,
                  data.Flow.pipe4.condition,
                  data.alert.condition,
                  data.action.condition,
                  data.fire1.condition,
                  data.fire2.condition,
                  data.freeAlarm.condition,
                ].map((e, index) => (
                  <React.Fragment key={index}>
                    <Text
                      style={{
                        fontSize: 8,
                        padding: 2,
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                        borderLeft: "1px solid #000",
                      }}>
                      {e ? "OK" : "NO"}
                    </Text>
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>
          <View style={{ flex: 1, borderBottom: "1px solid #000" }}>
            <Text style={styles.h2}>Note</Text>
            <Text style={{ fontSize: 8, padding: 5 }}>{data.noteSection4}</Text>
          </View>
        </View>
        {/* section 5 */}
        <View style={{ borderBottom: "1px solid #000", height: 50 }}>
          <Text
            style={{ fontSize: 8, fontFamily: "OpenSansBold", marginLeft: 2 }}>
            Note:{data.noteSection5}
          </Text>
          <Text style={{ fontSize: 8, padding: 5 }}>{data.noteSection5}</Text>
        </View>
        {/* section 6 */}
        <View
          style={{
            ...styles.row,
            borderBottom: "1px solid #000",
            height: 150,
          }}>
          <View style={{ flex: 1, borderRight: "1px solid #000" }}>
            <Text style={styles.label}>Nama PT : {data.namaPt}</Text>
            <Text
              style={{ fontSize: 8, padding: 2, fontFamily: "OpenSansBold" }}>
              Technical Signature :
            </Text>
            {technical && (
              <Image
                source={{ uri: technical }}
                style={{ width: 120, height: 120 }} // Adjust width and height as needed
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 8, padding: 2, fontFamily: "OpenSansBold" }}>
              Customer Signature :
            </Text>
            {customer && (
              <Image
                source={{ uri: customer }}
                style={{ width: 120, height: 120 }} // Adjust width and height as needed
              />
            )}
          </View>
        </View>
        {/* section 7 */}
        <View style={{ borderBottom: "0px solid", height: 100 }}>
          <Text style={{ fontSize: 8, padding: 2, fontFamily: "OpenSansBold" }}>
            Picture
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

const PDFView = ({ data, technical, customer }) => {
  console.log(technical, customer);
  return (
    <>
      <div className='btn'>
        <PDFDownloadLink
          document={
            <MyDocument data={data} technical={technical} customer={customer} />
          }
          fileName='example.pdf'
          data={data}>
          {({ loading, error }) =>
            loading ? (
              "Loading document..."
            ) : error ? (
              "Error generating PDF"
            ) : (
              <button className='btn bg-red-800 text-white ml-2 px-10 rounded-md'>
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default PDFView;

"use client"

import { Button } from "@mui/material";
import {  useRef,  } from "react";

export default function Page() {


    const contentRef = useRef<HTMLDivElement| null>(null);

    const downloadPDF = async () => {
        try {
            const htmlContent = contentRef.current?.innerHTML || ""; // Capture HTML content

            const response = await fetch('http://localhost:3000/api/PDF', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ htmlContent }), // Send the HTML content
            });

            if (!response.ok) {
                throw new Error('Failed to download PDF');
            }

            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'generated.pdf'; // The name of the downloaded PDF file
            link.click();
        } catch (error) {
            console.error('Error during PDF download:', error);
        }
    };


    return (
        <div >
            <div ref={contentRef} >

<div style={{ marginLeft: 20, marginRight: 20,marginTop:30 }}>



                <div style={{ display: "flex",}}>
                    <div style={{ width: 100, height: 73, borderColor: "black", borderWidth: 1, borderStyle: "solid", display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <img src="https://static.pakwheels.com/2015/09/general-tyre-logo-e1443609696106.png" alt="" style={{ width: 60, height: 57, alignSelf: "center" }} />
                    </div>

                    <div style={{ borderTop: "1px solid black", borderBottom: "1px solid black", textAlign: "center" }}>
                        <h5 style={{ margin: 0, fontSize: 13, fontWeight: "bold", marginLeft: 20, marginRight: 20 }}> THE GENERAL TYRE AND RUBBER COMPANY OF PAKISTAN LTD
                        </h5>
                        <p style={{ margin: 0, fontSize: 15, fontWeight: "bold", marginLeft: 10, marginRight: 10 }}>
                            F I R OF MOTOR / ELECTRIC ITEM

                        </p>
                        <div style={{ borderTop: "solid 1px black", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h4 style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>ELECTRIC WORK SHOP</h4>
                        </div>
                    </div>

                    <div style={{ border: "1px solid black", display: "flex" }}>


                        <div style={{ fontSize: 12, borderRight: "1px solid black" }}>

                            <p style={{ margin: 0, borderBottom: "1px solid black" }}>DOC.#</p>
                            <p style={{ margin: 0, borderBottom: "1px solid black" }}>ISSEU#</p>
                            <p style={{ margin: 0, paddingRight: 10, borderBottom: "1px solid black" ,width:80}}>ISSUE DATE#</p>
                            <p style={{ margin: 0 }}>PAGE#</p>



                        </div>

                        <div style={{ fontSize: 12, textAlign: "center" }}>

                            <p style={{ margin: 0, borderBottom: "1px solid black", paddingLeft: 15, paddingRight: 15 }}>FM-EMD-03</p>
                            <p style={{ margin: 0, borderBottom: "1px solid black" }}>01</p>
                            <p style={{ margin: 0, borderBottom: "1px solid black" }}>01/07/06</p>
                            <p style={{ margin: 0 }}>1</p>




                        </div>



                    </div>


                </div>
                {/* 2 portion  */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>

                    <div>



                        <div style={{ display: "flex", marginTop: 3 }}>
                            <div style={{ fontSize: 14 }}>
                                <p style={{ margin: 0 }}>

                                    Received Form
                                </p>

                                <p style={{ margin: 0, paddingTop: 10 }}>
                                    Equipment Name
                                </p>
                            </div>

                            <div style={{ fontSize: 14, marginLeft: 20 }}>
                                <p style={{ margin: 0 }}>:</p>
                                <p style={{ margin: 0, paddingTop: 10 }}>:</p>
                            </div>
                            <div style={{ fontSize: 14 }}>

                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0 }}>
                                        hello
                                    </p>
                                </div>


                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0, paddingTop: 10 }}>
                                        hello
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div style={{ display: "flex", }}>
                            <div style={{ fontSize: 14 }}>
                                <p style={{ margin: 0 }}>

                                    Received Date
                                </p>

                                <p style={{ margin: 0, paddingTop: 10 }}>
                                    Location of Motor
                                </p>
                            </div>

                            <div style={{ fontSize: 14, marginLeft: 20 }}>
                                <p style={{ margin: 0 }}>:</p>
                                <p style={{ margin: 0, paddingTop: 10 }}>:</p>
                            </div>
                            <div style={{ fontSize: 14 }}>

                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0, paddingTop: 10 }}>
                                        hello
                                    </p>
                                </div>


                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0 }}>
                                        hello
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* 3 portion title */}
                <div style={{ borderTop: "1px solid black", borderBottom: "1px solid black", textAlign: "center", marginTop: 10 }}>

                    <h3 style={{ fontWeight: "bold", textDecoration: "underline", margin: 1, fontSize: 16 }}>
                        MOTOR DATA
                    </h3>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontWeight: "bold", margin: 1, fontSize: 15 }}>D.C</h3>
                </div>

                {/* 3 protion */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>

                    <div>



                        <div style={{ display: "flex", }}>
                            <div style={{ fontSize: 14 }}>
                                <p style={{ margin: 0 }}>

                                    Power
                                </p>

                                <p style={{ margin: 0, paddingTop: 10 }}>
                                    WORK REQUEST #
                                </p>
                            </div>

                            <div style={{ fontSize: 14, marginLeft: 20 }}>
                                <p style={{ margin: 0 }}>:</p>
                                <p style={{ margin: 0, paddingTop: 10 }}>:</p>
                            </div>
                            <div style={{ fontSize: 14 }}>

                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0 }}>
                                        hello
                                    </p>
                                </div>


                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0, paddingTop: 10 }}>
                                        hello
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div style={{ display: "flex", }}>
                            <div style={{ fontSize: 14 }}>
                                <p style={{ margin: 0 }}>

                                    RPM
                                </p>

                                <p style={{ margin: 0, paddingTop: 10 }}>
                                    Make
                                </p>
                            </div>

                            <div style={{ fontSize: 14, marginLeft: 20 }}>
                                <p style={{ margin: 0 }}>:</p>
                                <p style={{ margin: 0, paddingTop: 10 }}>:</p>
                            </div>
                            <div style={{ fontSize: 14 }}>

                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0 }}>
                                        hello
                                    </p>
                                </div>


                                <div style={{ borderBottom: "1px solid black", width: 150 }}>
                                    <p style={{ margin: 0, paddingTop: 10 }}>
                                        hello
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* 4th portion  Header*/}

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <h3 style={{ marginBottom: 0 ,fontWeight:"bold",fontSize:16}}>Fault</h3>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: 0,fontWeight:"bold",fontSize:16 }}>Reason</h3>
                    </div>

                </div>
                <div style={{ border: "1px solid black", width: "100%", }}>

                </div>

                {/* 4th portion */}
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
                    <div style={{ fontSize: 14 }}>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, width:210}}>
                                Winding Burst
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Winding Over Heat
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Winding Ground
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Winding to Winding short
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Winding Open
                            </p>
                        </div>


                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Winding resistance un balance
                            </p>
                        </div>


                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Motor running two phase
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Motor Jam
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Armature Sparking
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Rusty
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Servicing
                            </p>
                        </div>

                    </div>




                    <div style={{ fontSize: 14 }}>

                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0,width:210 }}>
                                Bearing Jam (Motor)
                            </p>
                        </div>


                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Bearing Broken (Motor/Machine)
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Over Load (Motor)
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Over Traviling (Machine)
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Alimert Out (Motor)
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Water
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Rotor Friction (On Stater)
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >
                            <p style={{ margin: 0, marginTop: 2 }}>
                                Insulation weak
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >
                            <p style={{ margin: 0, marginTop: 2 }}>
                                Motor run two phase
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >
                            <p style={{ margin: 0, marginTop: 2 }}>
                                Dusty
                            </p>
                        </div>


                        <div style={{ borderBottom: "solid 1px black" }} >
                            <p style={{ margin: 0, marginTop: 2 }}>
                                other
                            </p>
                        </div>

                    </div>
                </div>

                {/* 5th header  */}
                <div style={{ borderTop: "1px solid black", borderBottom: "1px solid black", textAlign: "center", marginTop: 10 }}>

                    <h3 style={{ fontWeight: "bold", textDecoration: "underline", margin: 1, fontSize: 16 }}>
                        DAMAGES IN MOTOR
                    </h3>
                </div>
                {/* 5TH PORTION  */}
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
                    <div style={{ fontSize: 14 }}>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0,width:210 }}>
                                Rotor Melt
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Fan Melt broken
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Slots	Melt broken
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Statorbody Melt broken
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Shaft under size
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Key way broken
                            </p>
                        </div>

                    </div>




                    <div style={{ fontSize: 14 }}>

                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0 ,width:210}}>
                                Terminal box (Broken Crack)
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0 }}>
                                Terminal cover (Broken Crack)
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Side cover broken
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Foundation broken
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Bearing housing loose crack
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Shaft twist (broken/crack)
                            </p>
                        </div>

                    </div>
                </div>


                {/* 6th header  */}
                <div style={{ borderTop: "1px solid black", borderBottom: "1px solid black", textAlign: "center", marginTop: 10 }}>
                    <h3 style={{ fontWeight: "bold", textDecoration: "underline", margin: 1, fontSize: 16 }}>
                        PART MISSING
                    </h3>
                </div>
                {/* 6TH PORTION  */}
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
                    <div style={{ fontSize: 14 }}>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0,width:210 }}>
                                Terminal connector
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Terminal  cover
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Fan
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Fan cover
                            </p>
                        </div>

                    </div>




                    <div style={{ fontSize: 14 }}>

                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0,width:210 }}>
                                Cover
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0 }}>
                                Fram cover bolts
                            </p>
                        </div>
                        <div style={{ borderBottom: "solid 1px black", margin: 0 }} >

                            <p style={{ margin: 0 }}>
                                Rotor
                            </p>
                        </div>

                        <div style={{ borderBottom: "solid 1px black" }} >

                            <p style={{ margin: 0, marginTop: 2 }}>
                                Side cover
                            </p>
                        </div>



                    </div>
                </div>



<div style={{display:"flex",justifyContent:"space-around",marginTop:30}}>

<div>
    <div style={{borderBottom:"1px solid black",fontSize:14}}>

    <p style={{fontWeight:"bold"}}>
TOUQEER AHMED
    </p>
    </div>

<p>
    Prepared By
</p>

</div>




<div>
    <div style={{borderBottom:"1px solid black",fontSize:14}}>

    <p style={{fontWeight:"bold"}}>
ABDUL AZEEM 
    </p>
    </div>

<p>
    Checked By
</p>

</div>





</div>


                </div>
            </div>

            <Button variant="contained" onClick={downloadPDF}>download </Button>
        </div>
    )
}
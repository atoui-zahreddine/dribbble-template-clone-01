import {useMemo} from "react";
import {Handle} from "react-flow-renderer";

const CustomNode1 = () => {
    return (
        <div>
            <Handle
                type="source"
                position="top"
                id="a"
                style={{top: 0, opacity: 0, backgroundColor: "transparent"}}
            />
            <Handle
                type="source"
                position="bottom"
                id="f"
                style={{opacity: 0, backgroundColor: "transparent"}}
            />
            <span style={{color: "#767470", textTransform: "uppercase"}}>
        information
      </span>
            <h3 style={{marginTop: "20px"}}>
                Task-based <br/> explanation process
            </h3>
        </div>
    );
};

const CustomNode2 = () => {
    const profileImg = useMemo(
        () => (
            <>
                <img
                    style={{
                        position: "absolute",
                        border: "2px solid white",
                        borderRadius: "50%",
                        right: "-15px",
                        top: "-10%",
                        width: "50px",
                        height: "50px",
                    }}
                    className="App-header-profile-img"
                    src={`https://randomuser.me/api/portraits/med/men/${Math.round(
                        Math.random() * 100
                    )}.jpg`}
                    alt="profile-img"
                />
                <div style={{
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    padding: "10px",
                    position: "absolute",
                    top: "30%",
                    left: "-65%"
                }}>
                    50 %
                </div>
            </>
        ),
        []
    );
    return (
        <>
            <Handle
                type="target"
                position="left"
                style={{
                    bottom: "50%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />
            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{top: 0, opacity: 0, backgroundColor: "transparent"}}
            />
            <span style={{color: "#767470", textTransform: "uppercase"}}>
        information
      </span>
            <h3 style={{marginTop: "20px"}}>
                Explanation of <br/> verification process
            </h3>
            {profileImg}
        </>
    );
}

const CustomNode3 = () => {
    return (
        <>
            <Handle
                type="target"
                position="top"
                style={{
                    left: "50%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />
            <Handle
                type="source"
                position="left"
                id="j"
                style={{bottom: "50%", opacity: 0, backgroundColor: "transparent"}}
            />
            <Handle
                type="source"
                position="bottom"
                id="c"
                style={{opacity: 0, backgroundColor: "transparent"}}
            />
            <p style={{fontSize: "20px", lineHeight: "25px", marginBottom: "30px"}}>
                Team member determines ID document type and authenticity
            </p>
            <span
                style={{
                    backgroundColor: "#A6E225",
                    borderRadius: "5px",
                    padding: "15px",
                    marginRight: "15px",
                }}
            >
        Revising
      </span>
            <span
                style={{
                    backgroundColor: "#24282c",
                    color: "white",
                    borderRadius: "5px",
                    padding: "15px",
                }}
            >
        QA
      </span>
        </>
    );
};

const CustomNode4 = () => {
    return (
        <>
            <Handle
                type="target"
                position="top"
                style={{
                    left: "50%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />
            <Handle
                type="source"
                position="left"
                id="h"
                style={{bottom: "50%", opacity: 0, backgroundColor: "transparent"}}
            />
            <Handle
                type="source"
                position="bottom"
                id="d"
                style={{opacity: 0, backgroundColor: "transparent"}}
            />
            <h2>Automative image processing and recognition</h2>
        </>
    );
};

const CustomNode5 = () => {
    return (
        <>
            <Handle
                type="target"
                position="top"
                style={{
                    left: "50%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />

            <Handle
                type="source"
                position="right"
                id="e"
                style={{opacity: 0, backgroundColor: "transparent"}}
            />

            <p style={{fontSize: "20px", lineHeight: "25px", marginBottom: "30px"}}>
                Check data authenticity
            </p>
            <span
                style={{
                    backgroundColor: "#24282c",
                    color: "white",
                    borderRadius: "5px",
                    padding: "15px",
                }}
            >
        Supervisor
      </span>
        </>
    );
};

const CustomNode6 = () => {
    const profileImg = useMemo(
        () => (
            <img
                style={{
                    position: "absolute",
                    border: "2px solid white",
                    borderRadius: "50%",
                    right: "-15px",
                    top: "-10%",
                    width: "50px",
                    height: "50px",
                }}
                className="App-header-profile-img"
                src={`https://randomuser.me/api/portraits/med/men/${Math.round(
                    Math.random() * 100
                )}.jpg`}
                alt="profile-img"
            />
        ),
        []
    );
    return (
        <>
            <Handle
                type="target"
                position="bottom"
                style={{
                    left: "50%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />
            <p style={{fontSize: "20px", lineHeight: "25px", marginBottom: "30px"}}>
                Data sended to A.I
            </p>
            <span
                style={{
                    backgroundColor: "#A6E225",
                    borderRadius: "5px",
                    padding: "15px",
                    marginRight: "10px",
                }}
            >
        A.I
      </span>
            <span
                style={{
                    backgroundColor: "#24282c",
                    color: "white",
                    borderRadius: "5px",
                    padding: "15px",
                }}
            >
        QA
      </span>
            {profileImg}
        </>
    );
};

const CustomNode7 = () => {
    return (
        <div
            style={{
                width: "150px",
                height: "150px",
                transform: "rotate(45deg)",
                padding: "20px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#EAE9E3",
                border: "2px dashed rgba(0,0,0,.10)",
                textAlign: "center",
            }}
        >
            <Handle
                type="target"
                id="a"
                position="top"
                style={{
                    left: 0,
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />

            <Handle
                type="target"
                id="b"
                position="right"
                style={{
                    top: "0%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />
            <Handle
                type="target"
                id="c"
                position="bottom"
                style={{
                    bottom: "0%",
                    left: "100%",
                    color: "transparent",
                    opacity: 0,
                    backgroundColor: "transparent",
                }}
            />

            <p
                style={{
                    fontSize: "16px",
                    transform: "rotate(-45deg)",
                    lineHeight: "25px",
                }}
            >
                Evaluate{" "}
                <span
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textDecoration: "underline",
                        display: "block",
                    }}
                >
          Task-process
        </span>{" "}
                flow
            </p>
        </div>
    );
};

export {
    CustomNode1,
    CustomNode2,
    CustomNode3,
    CustomNode4,
    CustomNode5,
    CustomNode6,
    CustomNode7,
};

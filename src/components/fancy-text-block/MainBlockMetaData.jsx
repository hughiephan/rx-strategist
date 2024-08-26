import React from "react";

const MainBlockMetaData = () => {
  const blockMetaCotent = [
    {
      _id: 1,
      icon: "01",
      title: "Upload prescription",
      metaHoverContent: ` Don’t waste time on tedious manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time for solving
            more.`,
    },
    {
      _id: 2,
      icon: "02",
      title: "Indication Verification",
      metaHoverContent: `  Now it's more easy to make plan. Let Automation do it for you.
            Simplify workflows, reduce errors, and save time for solving more.`,
    },
    {
      _id: 3,
      icon: "03",
      title: "Dose verification",
      metaHoverContent: ` You are one step ahead to create wireframe. Let Automation do it for
            you. Simplify workflows.`,
    },
    {
      _id: 4,
      icon: "04",
      title: "Analysis Result",
      metaHoverContent: ` Checkout the final output. Let Automation do it for you. Simplify
            workflows, reduce errors, and save time for solving more.`,
    },
  ];
  return (
    <>
      {blockMetaCotent.map((blockMeta) => (
        <div className="block-meta-data text-center" key={blockMeta._id}>
          <div className="line-dot-container">
            <div className="icon-box">
              <img src={`images/icon/${blockMeta.icon}.svg`} alt="icon" />
            </div>
            {/* /.icon-box */}
            <p>{blockMeta.title}</p>
          </div>
          <div className="hover-content">
            <span>{blockMeta.metaHoverContent}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainBlockMetaData;

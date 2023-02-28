import React from "react";

const MoreVert = ()=>{
    return(
        <div>
            <input list="browsers" name="browser" id="browser">
        <datalist id="browsers">
          <option value="Edge">
          <option value="Firefox">
          <option value="Chrome">
          <option value="Opera">
          <option value="Safari">
        </datalist>
        </div>
    )
}

export default MoreVert;
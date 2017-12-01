import React, { Component } from 'react';

//components
import RktViewerFilePickerSidebarDropTarget from "./rkt_viewer_file_picker_sidebar_drop_target/rkt_viewer_file_picker_sidebar_drop_target";

export default class RktViewerFilePickerSidebar extends Component {

    constructor() {
        super();
        this.state = {};
        
        this.renderDicomPlaceholders = this.renderDicomPlaceholders.bind(this);
        
    }

    renderDicomPlaceholders() {
        var sidebar_targets_info = this.props.sidebar_targets_info;

        if (sidebar_targets_info) {
            
            var keys_sidebar_targets_info = Object.keys(sidebar_targets_info); // ["0", "1", ... , "n"]
            
            return (
                keys_sidebar_targets_info.map((key) => {

                    var sidebar_targets_item_info = this.props.sidebar_targets_info[key];
                    // sidebar_targets_item_info = {"index":key, "label": ?, "isAssigned":true/false, "index_source_img":?};
                    
                    return (
                        <RktViewerFilePickerSidebarDropTarget
                            // index={sidebar_targets_item_info.index}
                            // img_label={sidebar_targets_item_info.label}
                            // isAssigned={sidebar_targets_item_info.isAssigned}
                            // index_source_img={sidebar_targets_item_info.index_source_img}
                            sidebar_targets_item_info={sidebar_targets_item_info}
                            onimgdragdrop={this.props.onimgdragdrop}
                        />                
                    )
                })
            );

        } else {
            return <p>Loading</p>
        } 
    }

    render() {
        return (
            <div className="grid-block medium-2 vertical file-picker-sidebar" >
                {this.renderDicomPlaceholders()}
            </div>
        );
    }
}
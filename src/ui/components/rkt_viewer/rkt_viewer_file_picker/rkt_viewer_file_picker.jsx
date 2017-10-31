import React, { Component } from 'react';
import RktViewerFilePickerGrid from './rkt_viewer_file_picker_grid/rkt_viewer_file_picker_grid';
import RktViewerFilePickerSidebar from './rkt_viewer_file_picker_sidebar/rkt_viewer_file_picker_sidebar'

//import config from './../config/config.json';

// TO DO
export default class RktViewerFilePicker extends Component {

    constructor() {
        super();

        this.state = {
            
        };
    }

    componentDidMount() {

    }

    handleImgSelected(file, url) {
        // we update the data of the image to display in the sidebar
        this.setState({
            file_to_display: file,
            url_to_display: url
        });
    }

    renderGrid() {
        return (
            <RktViewerFilePickerGrid
                handleimgselected={this.handleImgSelected.bind(this)}
            />
        );
    }

    renderSidebar() {
        return (
            <RktViewerFilePickerSidebar
                url={this.state.url_to_display}
                file={this.state.file_to_display}
            />
        );
    }

    render() {

        return (
            <div className="grid-frame rkt-viewer-file-picker">
                {this.renderGrid()}
                {this.renderSidebar()}
            </div>
        );
    }
}
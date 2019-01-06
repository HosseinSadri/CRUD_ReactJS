import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class MessageModal extends Component {
    state = {
        visible: true,
    }
    handleClose = () => {
        this.setState({ visible: false })
    }
    render() {
        return (
            <div>
                {this.state.visible ?
                    <div className="text-center">
                        <div className="static-modal" >
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>{this.props.Header}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ color: 'Green', fontWeight: 'bold' }}>
                                    <h3>  {this.props.Message}</h3>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button block onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}


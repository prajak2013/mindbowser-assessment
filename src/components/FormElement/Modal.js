import React from 'react';
import classnames from 'classnames';

const Modal = ({ show = false, header = '', content = '', footer, okAction, closeAction }) => (
    <div className={classnames('modal', { 'fade show': show })} tabindex="-1" role="dialog"
     style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{header}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{content}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={okAction} className="btn btn-secondary" data-dismiss="modal">Ok</button>
                    <button type="button" onClick={closeAction} className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>);

export default Modal;
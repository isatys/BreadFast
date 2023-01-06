import * as React from 'react';

function ModalView({ showModal, data, onCancel, onConfirm }: any) {
    return (
        <div
            className={`modal fade ${showModal ? 'show modal-custom' : ''}`}
            id="deleteModal"
            role="dialog"
            aria-labelledby="modalLabel"
            onClick={onCancel}
            style={{ display: `${showModal ? 'block' : 'none'}` }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">
                            {data.title}
                        </h5>
                        <button
                            type="button"
                            className="close btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onCancel}
                        />
                    </div>
                    <div className="modal-body">
                        {data.content}
                    </div>
                    <div className="modal-footer">
                        {onCancel &&
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={onCancel}
                            >
                            {data.onCancel ?
                                data.onCancel
                                :
                                'Annuler'
                            }
                            </button>
                        }

                        {onConfirm &&
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={onConfirm}
                            >
                                {data.onConfirm ?
                                    data.onConfirm
                                    :
                                    'Valider'    
                                }
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalView;
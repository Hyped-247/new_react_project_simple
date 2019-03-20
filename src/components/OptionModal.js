import React from 'react';
import Modal from 'react-modal';


const OptionModel = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal">
            <h3 className="modal__title">{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}</h3>
            <button className="button" onClick={props.handleClearSelectedOption}>XXX</button>
        </Modal>
);

export default OptionModel;

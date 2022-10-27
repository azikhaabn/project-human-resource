import React from "react";
import styles from "/styles/CompanyPage/Polling/CreatePolls.module.css";

const CreateNewPoll = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content`}>
        <div className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}>
          <h3 class="modal-title">Create Polls</h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body ms-3 me-3`}>
          <div>
            <label for="taskName" className={`form-label`}>
              Question
            </label>
            <div className={`input-group mb-3`}>
              <textarea type="text" id="taskName" className={`${styles["input-group"]} form-control`}></textarea>
            </div>
          </div>

          <div>
            <label for="taskName" className={`form-label`}>
              Option
            </label>
            <div class="input-group mb-3">
              <input type="text" className={`${styles["input-option"]} form-control`} aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span class="input-group-text" id="basic-addon2">
                -
              </span>
            </div>
          </div>

          <div class="mb-3">
            <label className={`form-label`}>End Date</label>
            <div className={`input-group me-2`}>
              <input type="date" id="taskName" placeholder="New Task" className={`${styles["input-group"]} form-control`}></input>
            </div>
          </div>

          <div className={`mb-3`}>
            <a className={`${styles["btn-create"]} btn btn-sm btn-outline-secondary`} type="button" data-bs-toggle="modal" data-bs-target="#modalCreatePoll">
              FILTER PARTICIPANT
            </a>
          </div>

          <div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Allow participant to create other answer
              </label>
            </div>

            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Allow participant to comment
              </label>
            </div>

            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Send notification to participant
              </label>
            </div>
          </div>
        </div>

        <div className={`${styles["footer"]} modal-footer border-top mb-2`}>
          <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary mt-2 me-2 btn-sm`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
            SAVE
          </button>
          <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary mt-2 me-1 btn-sm`} data-bs-dismiss="modal">
            BACK
          </button>
        </div>
      </div>

      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <p>Are you sure to create this polls?</p>
            </div>
            <div class="modal-footer">
              <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary mt-2 me-1 btn-sm`}>
                CONFIRM
              </button>
              <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary mt-2 me-1 btn-sm`} data-bs-dismiss="modal">
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CreateNewPoll;

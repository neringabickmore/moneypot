// This creates contact form
// when the user clicks on the "envelope" sign
// in the footer.

const contactForm = document.createElement("div");
document.getElementById("contact-form-box").appendChild(contactForm);
contactForm.innerHTML = `<!-- 1.1 Contact form: Header-->
                <div class="modal-header">
                  <div
                    class="modal-title col-12 font-weight-normal text-center"
                    id="contactFormHeader"
                  >
                    <button
                      type="button"
                      class="close p-1"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <h5>
                      Help us improve! We value every customer and your feedback
                      matters to us.
                    </h5>
                  </div>
                </div>
                <!-- 1.2 Contact form: Main body -->
                <form class="container pt-3">
                  <div class="row justify-content-center">
                    <div class="col-12 col-sm-6">
                      <!-- 1.1.1 name input-->
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control text-center"
                          id="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <!-- 1.1.2 email address input----->
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control text-center"
                          id="email"
                          placeholder="Your email address"
                          required=""
                        />
                      </div>
                      <!-- 1.1.3 question one------->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="formQ1"
                            class="form-control col-form-label"
                          >
                            How challenging were the tasks for your
                            child?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="formQ1">
                            <option selected=""></option>
                            <option>Too challenging</option>
                            <option>Very challenging</option>
                            <option>At the right level</option>
                            <option>Could be more challening</option>
                            <option>Not challenging at all</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.4 question two-->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="#formQ2"
                            class="form-control col-form-label"
                          >
                            Did your child find the game entertaining?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="formQ2">
                            <option selected=""></option>
                            <option>Very entertaining</option>
                            <option>Entertaining</option>
                            <option>Not entertaining</option>
                            <option>Boring</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.5 question three-->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="interestedInMore"
                            class="form-control col-form-label"
                          >
                            Would you like to hear about similar games?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="interestedInMore">
                            <option selected=""></option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.6 suggestions-->
                      <div class="form-group text-center">
                        <label
                          for="otherinfo"
                          class="form-control col-form-label"
                          >Your suggestions</label
                        >
                        <textarea
                          class="form-control"
                          id="otherinfo"
                          rows="3"
                        ></textarea>
                      </div>
                      <!-- 1.1.7 legal/consent information-->
                      <div class="from-group">
                        <div class="form-legal-info">
                          <small class="form-text">
                            We'll never share your personal details with anyone
                            else.</small
                          >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              required=""
                            />
                            <label class="form-check-label" for="gridCheck">
                              <small class="form-text">
                                I consent to Money Pot collecting my details
                                through this form.</small
                              >
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- 1.3 Contact form: Send button -->
                <div class="modal-footer justify-content-center">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#thank-you-note"
                  >
                    <i
                      class="fas fa-paper-plane"
                      type="button"
                      aria-hidden="true"
                      title="send!"
                    ></i
                    ><span class="sr-only"> Paper plane </span>
                  </button>
                  <!-- 2. Thank you note-->
                  <div
                    class="modal fade"
                    id="thank-you-note"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="thankYouNoteHeader"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-md">
                      <div class="modal-content thank-you-box">
                        <!-- 2.1 Thank you note: Header-->
                        <div class="modal-header">
                          <div
                            class="modal-title col-12 text-center"
                            id="thankYouNoteHeader"
                          >
                            <h5>
                              Thank you!
                            </h5>
                          </div>
                        </div>
                        <!-- 2.2 Thank you note: Main body -->
                        <div class="container pt-3">
                          <div class="row">
                            <div class="col text-center">
                              <p>We will get back to you within 48 hours.</p>
                            </div>
                          </div>
                        </div>
                        <!-- 2.3 Thank you note: Exit button -->
                        <div class="modal-footer justify-content-center">
                          <button
                            type="button"
                            class="btn"
                            data-dismiss="modal"
                          >
                            <i
                              class="fas fa-times-circle"
                              type="button"
                              aria-hidden="true"
                              title="Exit!"
                            ></i
                            ><span class="sr-only"> Cross </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

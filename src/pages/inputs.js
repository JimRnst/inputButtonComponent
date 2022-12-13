import { eventsInputs } from "../functions/logicInputs";

const loadInputs = (() => {
        const main = document.getElementById('main');
        main.innerHTML = '';
        main.innerHTML = `
            <div id="title">Inputs</div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input /></p>
                    <label for="input-default">Label</label><br>
                    <input type="" name="input-default" class="input-box" placeholder="placeholder">
                </div>
                <div class="input-content">
                    <p>&:hover</p>
                    <label for="input-hover">Label</label><br>
                    <input type="" name="input-hover" class="input-box hover" placeholder="placeholder">
                </div>
                <div class="input-content">
                    <p>&:focus</p>
                    <label for="input-focus">Label</label><br>
                    <input type="" name="input-focus" class="input-box focus" placeholder="placeholder">
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input error/></p>
                    <label for="input-error" id="label-error">Label</label><br>
                    <input type="" name="input-error" class="input-box error" placeholder="placeholder">
                </div>
                <div class="input-content">
                    <p>&:hover</p>
                    <label for="input-error-hover" id="label-error-hover">Label</label><br>
                    <input type="" name="input-error-hover" class="input-box error hover" placeholder="placeholder">
                </div>
                <div class="input-content">
                    <p>&:focus</p>
                    <label for="input-error-focus" id="label-error-focus">Label</label><br>
                    <input type="tet" name="input-error-focus" class="input-box error focus" placeholder="placeholder"> 
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input disabled/></p>
                    <label for="input-disabled">Label</label><br>
                    <input type="" name="input-disabled" class="input-box" placeholder="placeholder" disabled>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input helperText="some interesting text"/></p>
                    <label for="input-helpertext" id="label-helpertext">Label</label><br>
                    <input type="" name="input-helpertext" class="input-box helpertext" placeholder="placeholder"><br>
                    <span class="helper-text"></span>
                </div>
                <div class="input-content">
                    <p>< Input helperText="some interesting text" error/></p>
                    <label for="input-helpertext-error" id="label-helpertext-error">Label</label><br>
                    <input type="" name="input-helpertext-error" class="input-box helpertextError" placeholder="placeholder"><br>
                    <span class="helper-textError"></span>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input startIcon /></p>
                    <label for="tel-icon" id="label-icon-start">Label</label><br>
                    <div class="flex-input">
                        <input type="tel" name="tel-icon" class="input-box startIcon" placeholder="placeholder">
                        <img class="start icon" src="/assets/phone.svg">
                    </div>
                </div>
                <div class="input-content">
                    <p>< Input endIcon /></p>
                    <label for="pass-icon" id="label-icon-end">Label</label><br>
                    <div class="flex-input">
                        <input type="password" name="pass-icon" class="input-box endIcon" placeholder="placeholder">
                        <img class="end icon" src="/assets/lock.svg">
                    </div>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input value="text" /></p>
                    <label for="text" id="label-text">Label</label><br>
                    <input type="text" name="text" class="input-box" value="text" placeholder="placeholder"><br>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content">
                    <p>< Input size="Sm" /></p>
                    <label for="sm">Label</label><br>
                    <input type="" name="sm" class="input-box sizeSm" placeholder="placeholder"><br>
                </div>
                <div class="input-content">
                    <p>< Input size="md" /></p>
                    <label for="md">Label</label><br>
                    <input type="" name="md" class="input-box sizeMd" placeholder="placeholder"><br>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content max-width">
                    <p>< Input fullWidth /></p>
                    <label for="max-width">Label</label><br>
                    <input type="" name="max-width" class="input-box fullWidth" placeholder="placeholder"><br>
                </div>
            </div>
            <div class="row-input">
                <div class="input-content max-width">
                    <p>< Input multiline row="4" /></p>
                    <label for="text1">Label</label><br>
                    <textarea name="text1" cols="40" rows="5"></textarea>
                </div>
            </div>

        `;
        eventsInputs()
});

export { loadInputs }
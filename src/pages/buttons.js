const loadButtons = (() => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.innerHTML = `
        <div id="title">Buttons</div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button /></p>
                <button class="btn default">Default</button>
            </div>
            <div class="button-content">
                <p>&:hover, &:focus</p>
                <button class="btn">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button variant="outline" /></p>
                <button class="btn outline">Default</button>
            </div>
            <div class="button-content">
                <p>&:hover, &:focus</p>
                <button class="btn outline btnhover">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button variant="text" /></p>
                <button class="btn text">Default</button>
            </div>
            <div class="button-content">
                <p>&:hover, &:focus</p>
                <button class="btn text btnhover">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button disbledShadow /></p>
                <button class="btn disbledShadow">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button disabled /></p>
                <button class="btn" disabled>Default</button>
            </div>
            <div class="button-content">
                <p>< Button variant="text" disabled/></p>
                <button class="btn text" disabled>Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button startIcon="local_grocery_store" /></p>
                <div class="icons">
                    <button class="btn startLocal_grocery_store">Default</button>
                </div>
            </div>
            <div class="button-content">
                <p>< Button endIcon="local_grocery_store"  /></p>
                <button class="btn endLocal_grocery_store">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button size="sm" /></p>
                <button class="btn size sm">Default</button>
            </div>
            <div class="button-content">
                <p>< Button size="md" /></p>
                <button class="btn size md">Default</button>
            </div>
            <div class="button-content">
                <p>< Button size="lg" /></p>
                <button class="btn size lg">Default</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>< Button color="default" /></p>
                <button class="btn color default">Default</button>
            </div>
            <div class="button-content">
                <p>< Button color="primary" /></p>
                <button class="btn color primary">Default</button>
            </div>
            <div class="button-content">
                <p>< Button color="secondary" /></p>
                <button class="btn color secondary">Secondary</button>
            </div>
            <div class="button-content">
                <p>< Button color="danger" /></p>
                <button class="btn color danger">Danger</button>
            </div>
        </div>
        <div class="row-button">
            <div class="button-content">
                <p>&:hovar, &:focus</p>
                <button class="btn color default">Default</button>
            </div>
            <div class="button-content">
                <p> </p><br>
                <button class="btn color primary">Default</button>
            </div>
            <div class="button-content">
                <p> </p><br>
                <button class="btn color secondary">Secondary</button>
            </div>
            <div class="button-content">
                <p> </p><br>
                <button class="btn color danger">Danger</button>
            </div>
        </div>
    `;
});

export { loadButtons }
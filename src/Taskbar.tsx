class Taskbar {
  shortcutsTray: HTMLElement;

  element = (
    <footer>

      <div id="launcher-button-container">
        <div id="launcher-button" on:click={() => { launcher.toggleVisible() }}><img src="/assets/icons/launcher.svg" style="height:100%;width:100%"></img></div>
      </div>
      <nav>
        <ul bind:shortcutsTray={this}>
          <li style="height: 40px; width=40px">
          </li>

        </ul >
      </nav >
    </footer >
  );
  constructor() {
  }
  addShortcut(svg: string, launch: () => void, appID: string) {
    let elm = (<li application={appID}>
      <input type="image" src={svg} class="showDialog" on:click={launch} />
    </li>);
    this.shortcutsTray.appendChild(elm);
  }
  killself() {
    this.element.remove();
  }
  removeShortcuts() {
    this.element.querySelectorAll('li').forEach((element: HTMLElement) => {
      if (element.hasAttribute("application"))
        element.remove()
    })
  }
}

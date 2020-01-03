import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name;
  cls = { open: 'open', close: 'close' };
  btnClass = this.cls.open;
  constructor() { }

  ngOnInit() {

  }

  toggleMenu(e) {
    const btn = document.getElementById('menu_checkbox');
    const menu = document.querySelector('nav ul');

    const toggle = e.target.checked;

    if (e.target.checked) {
      menu.classList.add('slide');
    } else {
      menu.classList.remove('slide');
    }

    console.log(e);

    // tslint:disable-next-line: no-unused-expression
    void btn.offsetWidth;
    btn.classList.add(this.btnClass);
  }

}

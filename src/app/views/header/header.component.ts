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
    const wraper = document.querySelector('.menu_wrapper');

    const toggle = e.target.checked;

    if (e.target.checked) {
      wraper.classList.remove('hide');
      setTimeout(() => {
        menu.classList.add('slide');
      }, 500);

    } else {
      setTimeout(() => {
        wraper.classList.add('hide');
      }, 500);

      menu.classList.remove('slide');
    }

    console.log(e);

    // tslint:disable-next-line: no-unused-expression
    void btn.offsetWidth;
    btn.classList.add(this.btnClass);
  }

}

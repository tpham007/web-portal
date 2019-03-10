import { Component, OnInit } from '@angular/core';

declare var liveagent:any;
declare global {
  interface Window { _laq: any; }
}
@Component({
  selector: 'hub-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async ngAfterViewInit() {
    await new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = "https://c.la1s1.salesforceliveagent.com/content/g/js/33.0/deployment.js";
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    }).then(function(result) {
      if (!window._laq) { window._laq = []; }
      liveagent.setCustomVariable('AAA', 'yes');
      liveagent.init('https://d.la3-c1-chi.salesforceliveagent.com/chat', '57270000000Caj1', '00D70000000K8HU');

      window._laq.push(function(){liveagent.showWhenOnline('57370000000Kz5e', document.getElementById('liveagent_button_online_57370000000Kz5e'));
        liveagent.showWhenOffline('57370000000Kz5e', document.getElementById('liveagent_button_offline_57370000000Kz5e'));
      });
    });
  }
  ngOnDestroy() {
    var allsuspects=document.getElementsByTagName("script");
    for (var i=allsuspects.length; i>=0; i--) {
      if (allsuspects[i] && allsuspects[i].getAttribute("src")!=null && allsuspects[i].getAttribute("src").indexOf("https://c.la1s1.salesforceliveagent.com/content/g/js/33.0/deployment.js")!=-1) {
          allsuspects[i].parentNode.removeChild(allsuspects[i]);
      }
    }
  }
}

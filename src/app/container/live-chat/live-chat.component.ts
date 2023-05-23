import { Component } from '@angular/core';@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {
  isChatVisible: boolean = false;
  messageCounterVisible: boolean = false;  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
    this.messageCounterVisible = !this.messageCounterVisible;
  }  closeChat() {
    this.isChatVisible = false;
  }
}
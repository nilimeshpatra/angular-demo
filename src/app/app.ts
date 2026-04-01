import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Nova UI');
  protected readonly headline = signal('Build the Future.');
  protected readonly subtext = signal('A lightning-fast, zero-scroll landing page template built entirely with Angular 19 signals.');
  
  protected readonly activePage = signal<'home' | 'features' | 'showcase' | 'docs'>('home');

  protected readonly featuresList = signal([
    { title: 'Signal Reactivity', desc: 'Granular state updates with zero overhead.', icon: '⚡' },
    { title: 'Locked Viewport', desc: 'Absolute zero-scroll guarantees across devices.', icon: '🛡️' },
    { title: 'Glassmorphism', desc: 'Hardware-accelerated blurs and modern depth.', icon: '✨' }
  ]);

  protected readonly showcaseList = signal([
    { title: 'Aero Dashboard', category: 'Analytics Platform', color: '#3b82f6' },
    { title: 'Nexus E-Comm', category: 'Digital Storefront', color: '#8b5cf6' },
    { title: 'Lumina Port', category: 'Creative Portfolio', color: '#ec4899' }
  ]);

  navigateTo(page: 'home' | 'features' | 'showcase' | 'docs', event: Event) {
    event.preventDefault();
    this.activePage.set(page);
  }
}
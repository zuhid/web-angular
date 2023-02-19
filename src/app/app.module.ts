import { isDevMode, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, IndexComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000", // Register the ServiceWorker as soon as the application is stable or after 30 seconds (whichever comes first).
    }),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

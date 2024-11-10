package com.firstProject

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.os.Build
import android.os.Bundle
import android.content.res.Configuration
import android.view.Window

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "FirstProject"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        val window: Window = window
        // Check the current theme (dark or light)
        when (resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) {
            Configuration.UI_MODE_NIGHT_YES -> {
                // Dark mode is active
                window.navigationBarColor = getColor(R.color.darkNavigationBarColor)
            }
            Configuration.UI_MODE_NIGHT_NO -> {
                // Light mode is active
                window.navigationBarColor = getColor(R.color.lightNavigationBarColor)
            }
            else -> {
                // Default (fallback) color
                window.navigationBarColor = getColor(R.color.defaultNavigationBarColor)
            }
        }
    }
  }
}

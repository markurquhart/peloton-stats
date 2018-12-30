<h1>Peloton Stats extract via JSON, display on wordpress CMS</h1>

<p>Wrote a bit of code to pull data from Strava (via this great <a href="https://wordpress.org/plugins/json-content-importer/" target="_blank">JSON plugin</a> and then transform it to friendly metric types for my region.</p>

<h3>To replicate</h3>
<ul>
  <li>First and foremost, ensure your Peloton is automatically pushing ride stats to Strava after every ride. </li>
  <li>Sign up for a Strava Developer's account</li>
  <li>Register an app</li>
  <li>Find your athlete ID</li>
  <li>Use the snippet code within one of the JSON content importer template tags, substitute in your athleteID and accessToken where templatized in my code</li>
  <li>Place the Javascript within your footer.php file in your wordpress theme (needs to run after JSON completes in DOM load process)</li>
  <li>Use CSS to manipulate look and feel</li>
</ul>

<p>Enjoy</p>
<hr>
<p>Updated: December 30th, 2018</p>
<ul>
  <li>Added in weight module</li>
  <li>Pulls from Strava, which is synced to streaming data from Fitbit smart scale</li>
  <li>Transforms kgs to lbs, and caps decimal places at two</li>
</ul>

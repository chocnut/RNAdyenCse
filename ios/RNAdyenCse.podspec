
Pod::Spec.new do |s|
  s.name         = "RNAdyenCse"
  s.version      = "1.0.0"
  s.summary      = "RNAdyenCse"
  s.description  = <<-DESC
                  RNAdyenCse
                   DESC
  s.homepage     = "https://github.com/chocnut/RNAdyenCse"
  s.license      = "MIT"
  s.author             = { "author" => "pindiola@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/chocnut/RNAdyenCse.git", :tag => "master" }
  s.source_files  = "*.{h,m}"
  s.requires_arc = true

  s.dependency 'React'
  s.dependency "AdyenCSE"
end

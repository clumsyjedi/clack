class Clack < Formula
  desc "Sort of like jq or maybe ack but for Clojure"
  homepage "https://github.com/clumsyjedi/clack"
  url "https://github.com/clumsyjedi/clack/raw/master/bundle/clack-0.0.1.tar.gz"
  sha256 "db4c80851b31d29fac564478e16a11cc4b805e5e50a4bbb9f319dbfdd6b8be39"

  depends_on "coreutils" => :build
  depends_on "node" => :run

  def install
  end

  test do
    system "test/main.sh"
  end
end

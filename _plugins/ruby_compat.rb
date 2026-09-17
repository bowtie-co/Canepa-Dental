# Liquid 4 (via Jekyll 4.2) still calls Object#tainted?, removed in Ruby 3.2+.
# Restore no-op stubs so builds work on Netlify's Ruby 3.4.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def taint
      self
    end

    def untaint
      self
    end
  end
end

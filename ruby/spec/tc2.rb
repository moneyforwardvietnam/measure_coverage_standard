# frozen_string_literal: true

require 'spec_helper'
require 'ruby_rspec'

RSpec.describe RubyRspec do
  describe 'check_number' do
    it 'should return positive and even' do
      expect(RubyRspec.new.check_number(3)).to eq('Number is Negative or odd')
    end
  end
end
